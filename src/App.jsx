import styled from "styled-components";
import GlobalStyle from "./style";
import Text from "./components/Text";
import Flex from "./components/Flex";
import COLORS from "./consts/colors";
import breakpoints from "./consts/breakpoints";
import useAppTheme from "./globalStates/theme/hooks";
import THEME from "./globalStates/theme/const";

const Wrapper = styled.div`
  background-color: ${({ theme }) =>
    theme === THEME.light ? COLORS.neutral.neutral40 : COLORS.neutral.neutral100};
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 74px 32px;

  @media (min-width: ${breakpoints.medium}) {
    min-width: 723px;
    max-width: 723px;
  }
`;

const Border = styled.div`
  border-top: 1px solid
    ${({ theme }) => (theme === THEME.light ? COLORS.neutral.neutral100 : COLORS.neutral.neutral10)};
  width: 46px;
`;

const ToggleButton = styled.button`
  height: 30px;
  width: 150px;
  font-size: 10px;
  background-color: ${({ theme }) =>
    theme === THEME.light ? COLORS.danger.danger100 : COLORS.neutral.neutral10};
  color: ${({ theme }) =>
    theme === THEME.light ? COLORS.danger.danger10 : COLORS.danger.danger100};
  border-radius: 29px;
  margin: 0 auto;
  border: none;
  cursor: pointer;

  @media (min-width: ${breakpoints.medium}) {
    font-size: 16px;
    width: 228px;
    height: 43px;
  }
`;

export default function App() {
  const { theme, toggleTheme } = useAppTheme();

  const textColor = theme === THEME.light ? COLORS.neutral.neutral100 : COLORS.neutral.neutral10;

  return (
    <Wrapper theme={theme}>
      <Container>
        <GlobalStyle />
        <Flex flexdirection="column" gap={30}>
          <Flex justifycontent="center">
            <Text
              color={textColor}
              textalign="center"
              width={250}
              size={8}
              breakpoints={{ medium: { width: 364, size: 12 } }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam
            </Text>
          </Flex>
          <Flex justifycontent="space-between">
            <Flex
              flexdirection="column"
              gap={14}
              display="none"
              breakpoints={{ medium: { display: "flex" } }}>
              <Flex flexdirection="column">
                <Text color={textColor}>2m+</Text>
                <Text size={10} color={COLORS.neutral.neutral50}>
                  nisi ut aliquid
                </Text>
              </Flex>
              <Border theme={theme} />
              <Flex flexdirection="column">
                <Text color={textColor}>100m+</Text>
                <Text size={10} color={COLORS.neutral.neutral50}>
                  autem quibusdam
                </Text>
              </Flex>
            </Flex>
            <Text
              color={textColor}
              flexshrink={0}
              width="100%"
              breakpoints={{ medium: { size: 36, width: 402 } }}
              size={16}
              textalign="center">
              Consectetur,{" "}
              <Text
                as="span"
                breakpoints={{ medium: { size: 36 } }}
                size={16}
                color={COLORS.danger.danger100}>
                adipisci
              </Text>{" "}
              velit, sed{" "}
              <Text
                as="span"
                breakpoints={{ medium: { size: 36 } }}
                size={16}
                color={COLORS.danger.danger100}>
                quia non
              </Text>{" "}
            </Text>
            <Flex
              flexdirection="column"
              alignitems="flex-end"
              gap={14}
              display="none"
              breakpoints={{ medium: { display: "flex" } }}>
              <Flex flexdirection="column">
                <Text textalign="right" color={textColor}>
                  1k+
                </Text>
                <Text size={10} color={COLORS.neutral.neutral50} textalign="right">
                  rerum facills
                </Text>
              </Flex>
              <Border theme={theme} />
              <Flex flexdirection="column">
                <Text textalign="right" color={textColor}>
                  120k
                </Text>
                <Text size={10} color={COLORS.neutral.neutral50} textalign="right">
                  libero tempore
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifycontent="space-between" breakpoints={{ medium: { display: "none" } }}>
            <Flex flexdirection="column" gap={14}>
              <Flex flexdirection="column">
                <Text color={textColor}>2m+</Text>
                <Text size={10} color={COLORS.neutral.neutral50}>
                  nisi ut aliquid
                </Text>
              </Flex>
              <Border theme={theme} />
              <Flex flexdirection="column">
                <Text color={textColor}>100m+</Text>
                <Text size={10} color={COLORS.neutral.neutral50}>
                  autem quibusdam
                </Text>
              </Flex>
            </Flex>
            <Flex flexdirection="column" alignitems="flex-end" gap={14}>
              <Flex flexdirection="column">
                <Text textalign="right" color={textColor}>
                  1k+
                </Text>
                <Text size={10} color={COLORS.neutral.neutral50} textalign="right">
                  rerum facills
                </Text>
              </Flex>
              <Border theme={theme} />
              <Flex flexdirection="column">
                <Text textalign="right" color={textColor}>
                  120k
                </Text>
                <Text size={10} color={COLORS.neutral.neutral50} textalign="right">
                  libero tempore
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <ToggleButton onClick={toggleTheme} theme={theme}>
            TOOGLE DARK MODE
          </ToggleButton>
        </Flex>
      </Container>
    </Wrapper>
  );
}
