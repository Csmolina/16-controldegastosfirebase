import styled from "styled-components";
export const ColorContent = styled.div`
display: flex;
justify-content: center;
height: ${props=>props.alto};
width: ${props=>props.ancho};
background-color: ${props=>props.color};
border-radius:50%;
`;