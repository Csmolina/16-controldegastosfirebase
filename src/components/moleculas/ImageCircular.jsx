import styled from 'styled-components';
import { ContentRadius } from '../atomos/ContentRadius';
import {Image} from "../atomos/Image"
export function ImageCircular({height, width, radius,marginRight}) {
return (
<ContentRadius height={height} width={width} radius={radius} marginRight={marginRight}>
    <Image source="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"  altText="ImagenUser"/>
</ContentRadius>
);
 }
const Container = styled.div``;