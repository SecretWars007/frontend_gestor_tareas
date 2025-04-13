import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';

const Register = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaLimite, setFechaLimite] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await axios.post("http://localhost:3005/api/tasks/", { titulo, descripcion, fechaLimite }, {headers: {Authorization: `Bearer ${token}`  }});
            alert("tarea registrada con éxito");
            navigate("/tareas");
        } catch (err) {
            setError(err.response?.data?.message || "Error al registrar tarea");
        }
    };
    
    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleRegister}>
                <div className="email">
                    <label>Titulo de tarea</label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input 
                            type="text" 
                            name="titulo" 
                            placeholder="titulo de tarea" 
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                            required
                        />
                    </div>
                </div>
                <div className="email">
                    <label>Descripcion de la Tarea</label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input 
                            type="text" 
                            name="descripcion" 
                            placeholder="Descripcion de la tarea" 
                            value={descripcion} 
                            onChange={(e) => setDescripcion(e.target.value)} 
                            required
                        />
                    </div>
                </div>
                <div className="password">
                    <label>Fecha Limite</label>
                    <div className="sec-2">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input 
                            type="date" 
                            name="fechaLimite" 
                            placeholder="Fecha limite"
                            value={fechaLimite} 
                            onChange={(e) => setFechaLimite(e.target.value)} 
                            required
                        />
                        <ion-icon class="show-hide" name="eye-outline"></ion-icon>
                    </div>
                </div>
                <br/>
                <div>
                    <Button type="submit">Registrar</Button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default Register;