import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const OurAnalysis = () => {
  const analysisData = [
    {
      title: "GDP rate goes down",
      description: "Economic slowdown affects growth negatively.",
      readMoreLink: "https://example.com/analysis/gdp-down",
      image: "https://thumbs.dreamstime.com/b/gdp-10657697.jpg"
    },
    {
      title: "Inflation rate on the rise",
      description: "Prices of goods and services increase.",
      readMoreLink: "https://example.com/analysis/inflation-rise",
      image: "https://static.india.com/wp-content/uploads/2022/12/inflation.jpg"
    },
    {
      title: "Unemployment rate remains high",
      description: "Large numbers of jobless individuals.",
      readMoreLink: "https://example.com/analysis/unemployment-high",
      image: "https://st2.depositphotos.com/3662505/7528/i/950/depositphotos_75285883-stock-photo-unemployed-man.jpg"
    },
    {
      title: "Stock market experiences volatility",
      description: "Rapid and unpredictable changes occur.",
      readMoreLink: "https://example.com/analysis/stock-market-volatility",
      image: "https://img.money.com/2022/10/Investing-Financial-Advisors-Tips-Market-Volatility.jpg?quality=85"
    },
    {
      title: "Rupee continues to depreciate",
      description: "Value of currency decreases steadily.",
      readMoreLink: "https://example.com/analysis/rupee-depreciation",
      image: "https://images.moneycontrol.com/static-mcnews/2022/06/rupee-fall.jpg?impolicy=website&width=770&height=431"
    },
    {
      title: "Placement not gurranteed even after engineeing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      readMoreLink: "https://example.com/analysis/another-analysis",
      image: "https://static.toiimg.com/thumb/msid-65729279,width-400,resizemode-4/65729279.jpg"
    }
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5" style={{ marginTop: "20vh" }}>
        Our Analysis
      </h1>
      <Row className="mx-10">
        {analysisData.map((data, index) => (
          <Col xs={12} md={4} key={index}>
            <Card className="my-3">
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button href={data.readMoreLink}>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurAnalysis;
