import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
// Importa la librería axios para hacer solicitudes HTTP
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';
const Login = () => {

    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    // Hook de React Router para navegar a diferentes rutas dentro de la aplicación
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post("http://localhost:3005/api/auth/login/", { correo, password }, { withCredentials: true });
            // Set a cookie
            Cookies.set('token', resp.data, { expires: 7 });
            setCorreo('');
            setPassword('');
            navigate("/home");
        } catch (error) {
            console.error('Error al realizar login', error);
        }
    };

     const handleRegister = async () => {
        try {
            setCorreo('');
            setPassword('');
            navigate("/register");  
        } catch (error) {
            console.error('Error al realizar login', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="email">
                <label>Email</label>
                <div className="sec-2">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Username@gmail.com" 
                        value={correo} 
                        onChange={(e) => setCorreo(e.target.value)} 
                        required
                    />
                </div>
            </div>
            <div className="password">
                <label>Password</label>
                <div className="sec-2">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="············"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <ion-icon class="show-hide" name="eye-outline"></ion-icon>
                </div>
            </div>
            <br/>
            <div>
                <Button type="submit">Iniciar Sesión</Button>
                <Button type="button" onClick={()=> handleRegister()}>Registrarse</Button>
            </div>
            
        </form>
    );
};

export default Login;




