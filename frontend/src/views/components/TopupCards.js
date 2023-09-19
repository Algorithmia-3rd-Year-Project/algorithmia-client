import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PaymentModal from "../components/PaymentModal";

const TopupCard = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="item-name">Pack 1</h2>
              <img
                src="devlog_images/game_s1.png"
                alt="Card Image"
                className="img-fluid"
              />
              <h3>Amount: 1000</h3>
              <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Pack 1"
                amount="10"
                buttonText="$10 purchase"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="item-name">Pack 1</h2>
              <img
                src="devlog_images/game_s1.png"
                alt="Card Image"
                className="img-fluid"
              />
              <h3>Amount: 1000</h3>
              <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Pack 1"
                amount="10"
                buttonText="$10 purchase"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="item-name">Pack 1</h2>
              <img
                src="devlog_images/game_s1.png"
                alt="Card Image"
                className="img-fluid"
              />
              <h3>Amount: 1000</h3>
              <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Pack 1"
                amount="10"
                buttonText="$10 purchase"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="item-name">Pack 1</h2>
              <img
                src="devlog_images/game_s1.png"
                alt="Card Image"
                className="img-fluid"
              />
              <h3>Amount: 1000</h3>
              <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Pack 1"
                amount="10"
                buttonText="$10 purchase"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="item-name">Pack 1</h2>
              <img
                src="devlog_images/game_s1.png"
                alt="Card Image"
                className="img-fluid"
              />
              <h3>Amount: 1000</h3>
              <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Pack 1"
                amount="10"
                buttonText="$10 purchase"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="item-name">Pack 1</h2>
              <img
                src="devlog_images/game_s1.png"
                alt="Card Image"
                className="img-fluid"
              />
              <h3>Amount: 1000</h3>
              <PaymentModal
                // Use a unique value for the orderId
                orderId={45896588}
                name="Pack 1"
                amount="10"
                buttonText="$10 purchase"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TopupCard;
