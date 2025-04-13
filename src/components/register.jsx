import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await axios.post("http://localhost:3005/api/auth/", { nombre, correo, password }, { withCredentials: true });
            alert("Usuario registrado con éxito");
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Error al registrar usuario");
        }
    };
    const handleLogin = async () => {
        setError(null);
        try {
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Error al registrar usuario");
        }
    };
    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleRegister}>
                <div className="email">
                    <label>Nombre del Usuario</label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input 
                            type="text" 
                            name="usuario" 
                            placeholder="Nombre de Usuario" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required
                        />
                    </div>
                </div>
                <div className="email">
                    <label>Correo Electrónico</label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input 
                            type="email" 
                            name="usuario" 
                            placeholder="Correo electronico de Usuario" 
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
                    <Button type="submit">Registrar</Button>
                    <Button type="button" onClick={() => handleLogin()}>Login</Button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default Register;