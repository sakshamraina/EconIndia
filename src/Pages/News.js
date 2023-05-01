import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import CustomNavbar from '../Components/Navbar';

function News() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=54991fb961714483ab2619fe892315e2"
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleReadMoreClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
    <CustomNavbar/>
    <Container>
      <Row>
        {articles.map((article) => (
          <Col md={4} key={article.url}>
            <Card className="my-3 p-3">
              <a href={article.url}>
                <Card.Img variant="top" src={article.urlToImage} />
              </a>
              <Card.Body>
                <a href={article.url}>
                  <Card.Title as="h5">{article.title}</Card.Title>
                </a>
                <Card.Text>{article.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleReadMoreClick(article.url)}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default News;
