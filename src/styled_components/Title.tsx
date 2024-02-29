import styled from "styled-components";

interface TitleProps {
  color?: string;
  backgroundColor?: string;
  padding?: number;
  textAlign?: string;
  fontWeight?: string;
  fontSize?: number;
  fontFamily?: string;
}

export const Title = styled.th<TitleProps>`
  color: #5a5959;
  background-color: #d3d3d3b5;
  padding: 15px;
  text-align: start;
  font-weight: bold;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;
