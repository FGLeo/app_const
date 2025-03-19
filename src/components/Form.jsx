import React from 'react';
import styled from 'styled-components';

const Form = ({ usuario, setUsuario, password, setPassword, handleLogin }) => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <p className="title">Inicio de Sesión</p>
        <form className="form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input 
              type="text" 
              id="username"
              placeholder="Usuario" 
              value={usuario || ""}
              onChange={(e) => setUsuario(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              name="password"
              type="password" 
              id="password"
              placeholder="Contraseña" 
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
            </div>
          </div>
          <button type="submit" className="sign">Iniciar Sesión</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(17, 24, 39, 1);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
  }
  .title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
  .form {
    margin-top: 1.5rem;
  }
  .input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .input-group label {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
  }
  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }
  .input-group input:focus {
    border-color: rgba(167, 139, 250);
  }
  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175,1);
    margin: 8px 0 14px 0;
  }
  .forgot a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;
  }
  .forgot a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
  }
  .sign {
    display: block;
    width: 100%;
    background-color: rgba(167, 139, 250, 1);
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
  }
`;

export default Form;
