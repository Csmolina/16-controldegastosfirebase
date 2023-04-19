import styled from "styled-components";
import { CategoriasTemplate } from "../components/templates/CategoriasTemplate";
import { DataDesplegableIngreGas } from "../utils/datalocal";
export function Categorias() {
  return (
    <CategoriasTemplate categoriasdesplegable={DataDesplegableIngreGas}>

    </CategoriasTemplate>
  );
}
