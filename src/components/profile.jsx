// import { useState } from "react";
import React from 'react';
// import { useNavigate } from "react-router-dom";
// Importa la librería axios para hacer solicitudes HTTP
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';
const Login = () => {

  
    // Hook de React Router para navegar a diferentes rutas dentro de la aplicación
    // const navigate = useNavigate();
    // Get a cookie
    const accessToken = Cookies.get('token');
    //const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5vbWJyZSI6IkVEV0lOIEdVU1RBVk8gRU5SSVFVRVogQVJJQVMiLCJpYXQiOjE3NDQ0Njc0ODEsImV4cCI6MTc0NDQ3NDY4MX0.cxjV4CbVqqKPHlfkBun_jcaq9tfz05hp_k0EXIcMiMY';
    const handleProfile = async () => {
        try {
            alert(accessToken);
            const resp = await axios.get('https://backend-gestor-tareas-i6j0.onrender.com/api/auth/me/', {headers: {'Authorization': `Bearer ${accessToken}`} })
            .then((res) => res.data)
            .catch((err) => console.error(err));
            console.log(resp);
        } catch (error) {
            console.error('Error al realizar profile', error);
        }
    };

    

    return (
        <div>
            <Button type="button" onClick={()=> handleProfile()}>Profile</Button>
        </div>
    );
};

export default Login;
