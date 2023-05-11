import { Dispatch, Fragment, SetStateAction } from "react";
import { Button, Card } from "react-bootstrap";

type UserTypes = {
  user: {
    fname: string;
    lname: string;
    age: number;
  }[];
  setUser: React.Dispatch<
    SetStateAction<
      {
        fname: string;
        lname: string;
        age: number;
      }[]
    >
  >;
};
export default ({ user, setUser }: UserTypes) => {
  return (
    <Card>
      <Card.Body>
        {user?.map((u) => (
          <Fragment>
            <p>{u.fname || "N/A"}</p>
            <p>{u.lname || "N/A"}</p>
            <p>{u.age}</p>
          </Fragment>
        ))}
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={(e) =>
            setUser((pre) => [
              ...pre,
              {
                fname: "Satnam",
                lname: "Bhullar",
                age: 30,
              },
            ])
          }
        >
          Add User
        </Button>
      </Card.Footer>
    </Card>
  );
};
