import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import Theme from "./components/Theme";
import Signup from "./components/Signup";
import UserSection from "./components/UserSection";
import { Col, Row } from "react-bootstrap";
import ContextApi from "./components/contextApi";

type listTypes = {
  fname: string;
  lname: string;
  age: number;
}[];

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState<listTypes>([] as listTypes);
  const [checked, setCheck] = useState<boolean>(false);
  const [number, setNumber] = useState<number | string>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const submit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="App">
      {/* Pass Components as Childrens */}
      <Theme>
        <Row>
          <Col md={6}>
            {/* Pass Style As Props */}
            <Banner
              title={"Pass Style As Props"}
              name="Hello App"
              style={{ backgroundColor: "red" }}
            />
          </Col>
          <Col>
            {/* Pass event change, Click, Form Submit , Direct SetState, Update Array */}
            <Signup
              state={state}
              handleChange={handleChange}
              submit={submit}
              checked={checked}
              setCheck={setCheck}
              number={number}
              setNumber={setNumber}
            ></Signup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            {/* Pass Array and Update Array */}
            <UserSection user={user} setUser={setUser}></UserSection>
          </Col>
          <Col md={4}>
            <ContextApi></ContextApi>
          </Col>
        </Row>
      </Theme>
    </div>
  );
}

export default App;
