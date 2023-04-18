import styled from 'styled-components';
import { UserAuth } from '../context/AuthContext';
export function Home() {
const {user,logOut}=UserAuth();
const cerrarSesion=async()=>{
try {
    await logOut();
} catch (error) {
    console.log(error);
}
}
return (
<Container>
<h1>Bienvenid@ {user.displayName}</h1>
<button onClick={cerrarSesion}>Cerrar Sesión</button>
</Container>
);
 }
const Container = styled.div``;