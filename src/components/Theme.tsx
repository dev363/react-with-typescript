import { Container } from "react-bootstrap";

type ThemeProps = {
  children: String | JSX.Element | JSX.Element[];
};
export default (props: ThemeProps) => {
  return (
    <Container>
      <h1>Header // Pass Components as Childrens</h1>
      <section className="main">{props.children}</section>
      <h1>Footer</h1>
    </Container>
  );
};
