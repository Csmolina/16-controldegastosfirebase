import styled from 'styled-components';
import { ColorContent } from '../atomos/ColorContent';
export function ItemsDesplegables({color,texto}) {
return (
<Container>
<ColorContent color={color} ancho="12px"alto="12px" />
<span>
    {texto}
</span>
</Container>
);
 }
const Container = styled.div`
cursor: pointer;
padding: 8px;
display: flex;
border-radius: 20px;
align-items: center;
gap: 10px;
&:hover{
    background-color: ${({theme})=>theme.bg4};
}
`;