import React, { Fragment, HtmlHTMLAttributes } from "react";
import { Form, Button } from "react-bootstrap";

type SignupTypes = {
  state: { email: string; password: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (event: React.FormEvent<HTMLInputElement>) => void;
  checked: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  number: number | string;
  setNumber: React.Dispatch<React.SetStateAction<number | string>>;
};
export default ({
  state,
  handleChange,
  submit,
  checked,
  setCheck,
  number,
  setNumber,
}: SignupTypes) => {
  console.log(state, 89890);

  return (
    <Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="number"
            placeholder="Password"
            value={number}
            onChange={(e) => {
              console.log(typeof e.target.value);
              setNumber(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={checked}
            onChange={() => setCheck((e) => !e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};
