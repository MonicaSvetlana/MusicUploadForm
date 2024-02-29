import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StyledIconProps {
  color?: string;
  fontSize?: number;
  $primary?: boolean;
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  color: #5a5959;
  font-size: .8em;
  ${(props) =>
    props.$primary &&
    css`
      cursor: pointer
    `};
`;
