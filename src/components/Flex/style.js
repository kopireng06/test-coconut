import styled, { css } from "styled-components";
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
            display: ${({ breakpoints }) => breakpoints[label].display || null};
            flex-direction: ${({ breakpoints }) => breakpoints[label].flexdirection || null};
            align-items: ${({ breakpoints }) => breakpoints[label].alignitems || null};
            justify-content: ${({ breakpoints }) => breakpoints[label].justifycontent || null};
            flex-wrap: ${({ breakpoints }) => breakpoints[label].justifycontent || null};
            flex-shrink: ${({ breakpoints }) => breakpoints[label].flexshrink || null};
            flex-grow: ${({ flexgrow }) => flexgrow};
            gap: ${({ gap }) => (!isNullOrUndefined(gap) ? `${gap}px` : null)};
            width: ${({ breakpoints }) =>
              isNumber(breakpoints[label].width)
                ? `${breakpoints[label].width}px`
                : isString(breakpoints[label].width)
                ? breakpoints[label].width
                : null};
            height: ${({ height }) => (!isNullOrUndefined(height) ? `${height}px` : null)};
          }
        `
    )
    .filter(Boolean)
    .flat();
};

export const StyledDiv = styled.div`
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexdirection }) => flexdirection};
  align-items: ${({ alignitems }) => alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
  flex-wrap: ${({ flexwrap }) => flexwrap};
  flex-shrink: ${({ flexshrink }) => flexshrink};
  flex-grow: ${({ flexgrow }) => flexgrow};
  gap: ${({ gap }) => (!isNullOrUndefined(gap) ? `${gap}px` : null)};
  width: ${({ width }) => (isNumber(width) ? `${width}px` : isString(width) ? width : null)};
  height: ${({ height }) => (!isNullOrUndefined(height) ? `${height}px` : "auto")};

  ${getBreakpointStyles}
`;
