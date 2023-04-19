import styled from "styled-components";

 export const Image = ({ source, altText }) => <Imagen src={source} alt={altText} className="imagen"/>
const Imagen=styled.img`
object-fit: cover;
width: 100%;
`;