import styled from "styled-components";
import { ContentIcon } from "../atomos/ContentIcon";
import {Icono } from "../atomos/Icono";
export function BtnCircularIcon({
  bgcolor,
  width,
  height,
  fontsize,
  textColor,
  icono
}) {
  return (
    <ContentIcon
      bgcolor={bgcolor}
      width={width}
      textColor={textColor}
      fontsize={fontsize}
      height={height}
    >
      <Icono icono={icono}/>
    </ContentIcon>
  );
}
const Container = styled.div``;
