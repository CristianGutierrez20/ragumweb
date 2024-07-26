import React from "react";
import Video from "../../components/Video";
import basico from "../../social/listaVideos/basico";
import { useState } from "react";
const JavaCurso = ()=>{
let [id,setId] = useState(0);
    return(
      <Video
        url={basico[id].url}
        a = {id<basico.length-1?'/contenido/java-basico/'+id:"/contenido/java-basico/Quizz"}
        quizz={"/contenido/java-basico/Quizz"}
        siguiente = {()=>id<basico.length?setId(id + 1):setId(id)}
        anterior = {()=>id>0?setId(id - 1):setId(id)}
      /> 
    );
}
export default JavaCurso;