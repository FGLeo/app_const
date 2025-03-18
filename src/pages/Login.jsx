import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación (se integrará la base de datos después)
    if (usuario === "admin" && password === "1234") {
      navigate("/home"); // Redirige a la página Home
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Usuario" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212;
`;

const LoginBox = styled.div`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: white;

  h2 {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background: #333;
    color: white;
  }

  button {
    width: 100%;
    padding: 10px;
    background: #7b61ff;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background: #654de4;
  }
`;

export default Login;
