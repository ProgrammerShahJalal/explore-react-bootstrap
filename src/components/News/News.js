import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, url } = props.news;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                        <p><a href={url}>Visit Now</a></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;