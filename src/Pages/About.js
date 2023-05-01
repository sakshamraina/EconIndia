import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import CustomNavbar from '../Components/Navbar';
const AboutUs = () => {
  return (
    <>
      <CustomNavbar/>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="my-4">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Welcome to our website that provides a comprehensive analysis of the Indian economy. We use machine learning algorithms to analyze various factors that impact the economy, such as GDP growth rate, unemployment rate, inflation rate, and other key indicators.
                </Card.Text>
                <Card.Text>
                  Our website is designed with the user in mind, providing an intuitive and user-friendly interface that makes it easy for anyone to navigate and explore the data. We use React Bootstrap for styling, ensuring that the website is both functional and aesthetically pleasing.
                </Card.Text>
                <Card.Text>
                  We understand the importance of providing accurate and timely information to our users, which is why we update our data on a regular basis. Our team of experts carefully curates the data to ensure that it is reliable and up-to-date.
                </Card.Text>
                <Card.Text>
                  Using our website, you can gain valuable insights into the Indian economy, including trends and other important indicators. We hope that you find our website informative and useful. If you have any questions or feedback, please feel free to contact us using the information below.
                </Card.Text>
                <ListGroup>
                  <ListGroup.Item><strong>Address:</strong> KJ Somaiya College, Vidyavihar</ListGroup.Item>
                  <ListGroup.Item><strong>Phone:</strong> +91 1234567890</ListGroup.Item>
                  <ListGroup.Item><strong>Email:</strong> info@econindia.com</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
