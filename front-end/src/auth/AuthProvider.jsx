import React, { useContext, createContext,useState, useEffect } from "react";
import {AuthResponse} from "../types/types";
import { User } from "../types/types";
import { API_URL } from "./constants";
const AuthContext = createContext(
    {
        isAuthenticated : false,
        getAccessToken: ()=>"",
        saveUser: (userData =  AuthResponse ) =>{},
        getRefreshToken: () => {},
        getUser: () => ({} = User | undefined),
        signOut: ()=>{},
    }
    
);

const AuthProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [user, setUser] = useState("");
    useEffect(()=>{
        checkAuth();
    },[]);

    async function requestNewAccessToken(refreshToken){
        try{
            const response = await fetch(`${API_URL}/refresh-token`,{
                method: "POST",
                headers: {
                    "Content-type" : "application/json",
                    "Authorization" : `Bearer ${refreshToken}`,
                },

            });

            if(response.ok){
                const json = (await response.json());
                if(json.error){
                    throw new Error(json.error);
                }
                return json.body.accessToken;
            }
            else{
                throw new Error(response.statusText);
            }
        }
        catch(error){
            console.log(error)
            return null;
        }

    }

    async function getUserInfo(accessToken){
        try{
            const response = await fetch(`${API_URL}/user`,{
                method: "GET",
                headers: {
                    "Content-type" : "application/json",
                    "Authorization" : `Bearer ${accessToken}`,
                },

            });

            if(response.ok){
                const json = (await response.json());
                if(json.error){
                    throw new Error(json.error);
                }
                return json.body;
            }
            else{
                throw new Error(response.statusText);
            }
        }
        catch(error){
            console.log(error)
            return null;
        }
    }
    async function checkAuth(){
        if(accessToken){
           
        }
        else{
            const token = getRefreshToken();
            if(token){
                const newAccessToken = await requestNewAccessToken(token);
                if(newAccessToken){
                    const userInfo = await getUserInfo(newAccessToken);
                    if(userInfo){
                       saveSessionInfo(userInfo, newAccessToken, token);
                    }

                }
            }
        }
    }

    function signOut(){
        setIsAuthenticated(false);
        setAccessToken("");
        setUser(undefined);
        localStorage.removeItem("token");
    }
    function saveSessionInfo(userInfo = User, accessToken, refreshToken){
        setAccessToken (accessToken);
        localStorage.setItem("token", JSON.stringify(refreshToken));
        setIsAuthenticated(true);
        setUser(userInfo);
    }

    function getAccessToken(){
        return accessToken;
    }

    function getRefreshToken(){
        const tokenData = localStorage.getItem("token");
        if(tokenData){
            const token = JSON.parse(tokenData);
            return token;
        }
        return null;
    }
    
    function saveUser(userData = AuthResponse){
        saveSessionInfo(userData.body.user,userData.body.accessToken,userData.body.refreshToken);
    }

    function getUser(){
        return user;
    }
    return(
    <AuthContext.Provider value={{isAuthenticated,getAccessToken,saveUser, getRefreshToken,getUser, signOut}}>
        {children}
    </AuthContext.Provider>
    );
}
export const useAuth = ()=> useContext(AuthContext);
export default AuthProvider;