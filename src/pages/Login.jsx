// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Form from "../components/Form";

// const Login = ({ setIsAuthenticated }) => {
//   const [usuario, setUsuario] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simulación de autenticación
//     if (usuario === "admin" && password === "1234") {
//       localStorage.setItem("auth", "true"); // Guarda sesión
//       setIsAuthenticated(true);
//       navigate("/home"); // Redirige al Home
//     } else {
//       alert("Credenciales incorrectas");
//     }
//   };

//   return (
//     <LoginContainer>
//       <Form 
//         usuario={usuario} 
//         setUsuario={setUsuario} 
//         password={password} 
//         setPassword={setPassword} 
//         handleLogin={handleLogin} 
//       />
//     </LoginContainer>
//   );
// };

// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: #121212;
// `;

// export default Login;
