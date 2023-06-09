import styled from "styled-components";
import { ImageCircular } from "../moleculas/ImageCircular";
import { SpanCollapse } from "../atomos/SpanCollapse";
import { BtnCircularIcon } from "../moleculas/BtnCircularIcon";
import { v } from "../../styles/Variables";
export function Datauser() {
  return (
    <Container>
      <ImageCircular
        height="40px"
        width="40px"
        radius="50%"
        marginRight="20px"
      />
      <div className="btncorona">
        <BtnCircularIcon
          icono={v.iconoCorona}
          width="20px"
          height="20px"
          bgcolor="#ffff"
          fontsize="11px"
          textColor="#181616"
        />
      </div>

      <SpanCollapse texto="Cristopher Molina" />
      <BtnCircularIcon icono={v.iconoFlechaabajo} width="30px" height="30px" />
    </Container>
  );
}
const Container = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .btncorona{
    position: absolute;
    transform: translateX(-50px) translateY(-12px);
  }
`;
