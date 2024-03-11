import { useContext } from "react";
import ThemeContext from "../theme/context";

export default function useAppTheme() {
  return useContext(ThemeContext);
}
