import styled from "styled-components";
export function ContentIcon({
  children,
  bgcolor,
  width,
  height,
  fontsize,
  textColor,
}) {
  return (
    <Container bgcolor={bgcolor} width={width} textColor={textColor} fontsize={fontsize} height={height}>
      {children}
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: ${(props) => props.fontsize};
    text-align: center;
    color: ${(props) => props.textColor};
  }
`;
