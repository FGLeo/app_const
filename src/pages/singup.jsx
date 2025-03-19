import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/Form"; // Importación correcta

export function Singup({ setIsAuthenticated }) { 
  const [usuario, setUsuario] = useState("");  // Estado para usuario
  const [password, setPassword] = useState("");  // Estado para password
  const navigate = useNavigate();

  const handleSingup = (e) => {
    e.preventDefault();

    // Simulación de autenticación
    if (usuario === "admin" && password === "1234") {
      localStorage.setItem("auth", "true"); // Guarda sesión
      setIsAuthenticated(true);
      navigate("/home"); // Redirige al Home
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <SingupContainer>
      <Form 
        usuario={usuario} 
        setUsuario={setUsuario} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleSingup}  // Este prop debe llamarse igual en Form.jsx
      />
    </SingupContainer>
  );
}

const SingupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212;
`;
