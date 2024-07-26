export const User = {
    _id: String,
    usuario: String
};
export const AuthResponse =  {
    body: {
        user: User,
        accessToken: String,
        refreshToken: String
    }
};

export const AuthError = {
    body: {
      error: String
    }
};

