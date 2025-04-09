import { useState } from "react";
import React from 'react';


const Login = () => {

    const [email, setEmail] = useState('');
    // const [correo, setCorreo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            alert("HOLA GUSGUS");
            setEmail('');
            // setCorreo('');
        } catch (error) {
        console.error('Error al agregar cliente', error);
        }
  };

    return (
        <form onSubmit={handleSubmit}>
            <div class="email">
                <label for="email">Email</label>
                <div class="sec-2">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Username@gmail.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
            </div>
            <div class="password">
                <label for="password">Password</label>
                <div class="sec-2">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input class="pas" type="password" name="password" placeholder="············"/>
                    <ion-icon class="show-hide" name="eye-outline"></ion-icon>
                </div>
            </div>

      <button type="submit">Iniciar Sesión</button>
    </form>
    );
};

export default Login;




