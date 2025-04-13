import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/clienteList.css';  // Importa el archivo de estilos
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [setMensaje] = useState([]);
  const navigate = useNavigate();
  const [setError] = useState(null);
    // Get a cookie
    const token = Cookies.get('token');
  useEffect(() => {
    axios.get('https://backend-gestor-tareas-i6j0.onrender.com/api/tasks/',{headers: {Authorization: `Bearer ${token}`  }})
      .then((response) => setTareas(response.data))
      .catch((error) => console.error('Error al obtener clientes', error));
  }, [token]);

   const handleEliminar = async (req) => {
        setError(null);
        try {
            await axios.delete('https://backend-gestor-tareas-i6j0.onrender.com/api/tasks/'+req,{headers: {Authorization: `Bearer ${token}`  }})
            .then((response) => setMensaje(response.data))
            .catch((error) => console.error('Error al eliminar la tarea', error));
            alert("tarea eliminada");
            navigate('/tareas');
        } catch (err) {
            setError(err.response?.data?.message || "Error al eliminar tarea");
        }
    };
const handleActualizarEstado = async (req, estado) => {
        setError(null);
        try {
            if (estado == 0) {
              estado = 1
            }else{
              if (estado == 1) {
                estado = 2
              }
            }
            await axios.put('https://backend-gestor-tareas-i6j0.onrender.com/api/tasks/'+req,{ estado },{headers: {Authorization: `Bearer ${token}`  }})
            .then((response) => setMensaje(response.data))
            .catch((error) => console.error('Error al actualizar el estado la tarea', error));
            alert("Estado de tarea actualizada");
        } catch (err) {
            setError(err.response?.data?.message || "Error al actualizar el estado de la tarea");
        }
    };
  return (
    <div className="table-container">
      <h2>Lista de Tareas</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Eliminar</th>
            <th>Actualizar</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td>{tarea.id}</td>
              <td>{tarea.titulo}</td>
              <td>{tarea.descripcion}</td>
              <td>{tarea.estado}</td>
              <td><Button type="button" onClick={() => handleEliminar(tarea.id)} >Eliminar</Button></td>
              <td><Button type="button" onClick={() => handleActualizarEstado(tarea.id, tarea.estado)}>Actualizar Estado</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tareas;