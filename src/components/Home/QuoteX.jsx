import React from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./QuoteX.css"

function QuoteX() {
  return (
    <div className="quotex-container">
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image
              src="src/components/Home/Inspire.jpg"
              style={{ width: "400px", height: "230px" }}
              fluid
              rounded
            />
          </Col>
          <Col sm={4} className="first-row-second-col">
            <h1>Life's Tough. </h1>
            <h1>Get Inspired.</h1>
            <Button
              variant="primary"
              style={{
                width: "10rem",
                height: "2.4rem",
                margin: "1rem 0 1rem 0",
              }}
              as={Link}
              to="/start"
            >
              Click to Begin!
            </Button>
          </Col>
        </Row>
        <Row className="px-4 mb-3">
          <h3>Recent quotes by our users</h3>
        </Row>
        <Row className="px-4 mb-5">
          <Col>
            <Card style={{ width: "14rem", height: "8.5rem" }}>
              <Card.Body>
                <Card.Title>Bob Marley</Card.Title>
                <Card.Text>
                  Love the life you live. Live the life you love.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "14rem", height: "8.5rem" }}>
              <Card.Body>
                <Card.Title>Aristotle</Card.Title>
                <Card.Text>
                  It is during our darkest moments that we must focus to see the
                  light.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "14rem", height: "8.5rem" }}>
              <Card.Body>
                <Card.Title>Confucius</Card.Title>
                <Card.Text>
                  It does not matter how slowly you go, as long as you do not
                  stop.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="px-4 mb-5">
          <Card>
            <Card.Header as="h5">Featured Quote</Card.Header>
            <Card.Body>
              <Card.Title>Ralph Waldo Emerson</Card.Title>
              <Card.Text>
                The only person you are destined to become is the person you
                decide to be.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default QuoteX