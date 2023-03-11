import React from "react";

const AuthContext = React.createContext({isLoggedIn:false,user:{}});

export default AuthContext;
