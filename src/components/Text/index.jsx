import { StyledText } from "./style";

export default function Text({ children, ...rest }) {
  return <StyledText {...rest}>{children}</StyledText>;
}
