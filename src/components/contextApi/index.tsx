import { Children, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ThemeContext, ThemeContextTypes, themeColors } from "./context";

const ContextApi = () => {
  const [color, setColor] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("Light");

  const changeColor = (e: boolean) => {
    setColor(e);
  };

  useEffect(() => {
    console.log(color, 9090);
    setTheme(color ? "Light" : "Dark");
  }, [color]);
  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor: changeColor,
        themeColors: themeColors[theme as typeof themeColors],
      }}
    >
      <ThemeComponent>
        <ThemeChange />
      </ThemeComponent>
    </ThemeContext.Provider>
  );
};

type ThemeComponentTypes = {
  children: React.ReactNode;
};
const ThemeComponent = ({ children }: ThemeComponentTypes) => {
  const { themeColors } = useContext<ThemeContextTypes>(ThemeContext);
  return (
    <Container
      style={{
        height: "100%",
        width: "100%",
        border: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...themeColors,
      }}
    >
      {children}
    </Container>
  );
};
const ThemeChange = () => {
  const { color, setColor } = useContext<ThemeContextTypes>(ThemeContext);
  return <Button onClick={(e) => setColor(!color)}>Change Theme</Button>;
};

export default ContextApi;
