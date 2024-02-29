import styled, { css } from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
  borderRadius?: number;
  border?: number;
  color?: string;
  margin?: number;
  padding?: number;
  cursor?: string;
  fontFamily?: string;
  fontWeight?: string;
  $primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: #d3d3d34f;
  border-radius: 3px;
  border: 1px solid #514f4f;
  color: #5a5959;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  ${(props) =>
    props.$primary &&
    css`
      width: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1em;
      background-color: inherit;
    `};
`;
