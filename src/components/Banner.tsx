import { Container } from "react-bootstrap";

type BannerProps = {
  title: String,
  name:string,
  style: React.CSSProperties
};

const Banner = (props: BannerProps) => {
  return (
    <Container style={props.style}>
      <h3>{props.title}</h3>
      <h6>{props.name}</h6>
    </Container>
  );
};

export default Banner;
