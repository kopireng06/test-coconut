import { StyledDiv } from "./style";

export default function Flex({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
}
