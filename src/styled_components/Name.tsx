import styled, { css } from "styled-components";

interface NameProps {
  padding?: number;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
   $primary?: boolean 
}



export const Name = styled.td<NameProps>`
  padding: 20px;
  color: #514f4f;
  font-size: 1.1em;
  font-family: "Times New Roman", Times, serif;

  ${(props) =>
    props.$primary &&
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;

    `};
`;
