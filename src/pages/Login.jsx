import { useEffect } from "react";
import styled from "styled-components";
import astronauta from "../assets/astronauta.png";
import logogoogle from "../assets/logoogle.png";
import {Icono} from "../components/atomos/Icono"
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LottieAnimacion } from "../components/atomos/LottieAnimacion";
import { v } from "../styles/Variables";
export function Login() {
  const navigate = useNavigate();
  const { user, googleSignIn } = UserAuth();
  const iniciarSesion = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  return (
    <Container>
      <section className="imgseccion">
        <h1>Es hora de transformar sus finanzas con FINNICK</h1>
        <div className="fondocontent">
          <LottieAnimacion animacionData={v.zorrologo} />
        </div>

        <button className="btniniciar" onClick={iniciarSesion}>
          <img src={logogoogle} />
          <span> Iniciar con Gmail</span>
        </button>
        <section className="contentfrase">
      <Icono icono={v.iconocandado}/>
        
        <p>
          Esta es una página segura. Si tienes dudas sobre la autenticidad de la
          web, comunícate con nosotros <br /> al 0448594485349
        </p>
      </section>
      </section>

    
    </Container>
  );
}
const Container = styled.div`
  margin:-20px;
  margin-left:-125px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(78,86,135);
background: radial-gradient(circle, rgba(78,86,135,1) 0%, rgba(17,40,66,1) 100%);
  flex-direction: row;
  .imgseccion{
    width: 50%;
    height: 100vh;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 35px;
    .fondocontent{
      display: flex;
      justify-content: center;
      width: 50%;
      height: 30%;
      align-items: center;
      
    }
    h1 {
      font-size: 35px;
      font-weight: 650;
      color: #ffffff;
    }
    .btniniciar {
      display: flex;
      align-items: center;
      gap: 12px;
      border-style: none;
      img {
        width: 30px;
      }
      background-color: white;
      padding: 15px 30px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 22px;
      box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.12);
      transition: all 0.25s ease;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 10%);
        cursor: pointer;
      }
      span {
        opacity: 0.8;
      }
    }
    .contentfrase{
      display: flex;
      font-size: 13px;
      p {
        color: rgba(255, 255, 255, 0.8);
        font-weight: 450;
        font-style: italic;
      }
      svg {
        font-size: 30px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
@media (max-width:48em){
  .imgseccion{
    width:100%;
    .contentfrase{
      font-size:12px;
    }
  }
  
}
@media (max-width:64em){
  .imgseccion{
    width:100%;
    .contentfrase{
      font-size:12px;
    }
  }
  
}
  @keyframes flotar {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 20px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
`;