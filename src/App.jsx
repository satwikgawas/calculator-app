import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col
          md={{ span: 4, offset: 4 }}
          className="border border-success border-4 rounded-4 shadow-lg p-4 bg-light"
        >
          <h2 className="text-center mb-3">Calculator</h2>
          <div className="mb-3 border border-success border-2 rounded-3 bg-white p-3 text-right">
            <h3>{input}</h3>
          </div>

          <Row className="mb-2">
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("7")}
              >
                7
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("8")}
              >
                8
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("9")}
              >
                9
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("/")}
              >
                /
              </Button>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("4")}
              >
                4
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("5")}
              >
                5
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("6")}
              >
                6
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("*")}
              >
                *
              </Button>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("1")}
              >
                1
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("2")}
              >
                2
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("3")}
              >
                3
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("-")}
              >
                -
              </Button>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("0")}
              >
                0
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick(".")}
              >
                .
              </Button>
            </Col>
            <Col>
              <Button
                variant="success"
                className="w-100 rounded-3 shadow-sm"
                onClick={calculate}
              >
                =
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="w-100 rounded-3 shadow-sm"
                onClick={() => handleClick("+")}
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="danger"
                className="w-100 rounded-3 shadow-sm"
                onClick={clear}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
