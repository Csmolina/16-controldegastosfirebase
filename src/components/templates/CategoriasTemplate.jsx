import styled from "styled-components";
import {BtnDesplegable, MenuDesplegable, ContentFiltros, Datauser, Contentheader} from "../../index"
export function CategoriasTemplate({ children,categoriasdesplegable }) {
  return (
    <Container>
      <Contentheader>
        <Datauser />
      </Contentheader>
      <ContentFiltros>
        <BtnDesplegable inputColor="#7856ff" textcolor="white" text="Categoría de Ingresos" />
        <MenuDesplegable datadesplegable={categoriasdesplegable}/>
      </ContentFiltros>
      {children}
    </Container>
  );
}
const Container = styled.div``;
