import styled, { css } from "styled-components";
import COLORS from "../../consts/colors";
import isNullOrUndefined from "../../utils/isNullOrUndefined";
import breakpoints from "../../consts/breakpoints";
import isNumber from "../../utils/isNumber";
import isString from "../../utils/isString";

const getBreakpointStyles = (props) => {
  return Object.keys(breakpoints)
    .map(
      (label) =>
        props.breakpoints?.[label] &&
        css`
          @media (min-width: ${breakpoints[label]}) {
            font-size: ${({ breakpoints }) =>
              !isNullOrUndefined(breakpoints[label].size) ? `${breakpoints[label].size}px` : null};
            color: ${({ breakpoints }) =>
              !isNullOrUndefined(breakpoints[label].color) ? breakpoints[label].color : null};
            width: ${({ breakpoints }) =>
              isNumber(breakpoints[label].width)
                ? `${breakpoints[label].width}px`
                : isString(breakpoints[label].width)
                ? breakpoints[label].width
                : null};
            margin: ${({ breakpoints }) =>
              breakpoints[label].margin ? `${breakpoints[label].margin}px` : null};
            display: ${({ breakpoints }) => {
              if (!isNullOrUndefined(breakpoints[label].as))
                switch (breakpoints[label].as) {
                  case "span":
                    return "inline";
                  default:
                    return "block";
                }
              return null;
            }};
            text-align: ${({ breakpoints }) =>
              !isNullOrUndefined(breakpoints[label].textalign) ? "left" : null};
            flex-shrink: ${({ breakpoints }) => breakpoints[label].flexshrink};
            flex-grow: ${({ breakpoints }) => breakpoints[label].flexgrow};
          }
        `
    )
    .filter(Boolean)
    .flat();
};

export const StyledText = styled.p`
  font-size: ${({ size }) => size || 12}px;
  color: ${({ color }) => color || COLORS.neutral.neutral100};
  width: ${({ width }) => (isNumber(width) ? `${width}px` : isString(width) ? width : null)};
  margin: 0;
  display: ${({ as }) => {
    switch (as) {
      case "span":
        return "inline";
      default:
        return "block";
    }
  }};
  text-align: ${({ textalign }) => textalign || "left"};
  flex-shrink: ${({ flexshrink }) => flexshrink};
  flex-grow: ${({ flexgrow }) => flexgrow};

  ${getBreakpointStyles}
`;
