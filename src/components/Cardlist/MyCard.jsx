import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyCard.css'

const MyCard = ({ data }) => {
    return (
        <Card className='card mb-4'>
            <Card.Img variant="top" src={data.image} style={{ width: '50%', height: '16rem' }} />
            <Card.Body>
                <Card.Title className='title'>{data.title}</Card.Title>
                <Card.Text className='price'>${data.price}</Card.Text>
                <Card.Text className='description'>
                    {data.description}
                </Card.Text>
                <Button variant="primary">Go</Button>
            </Card.Body>
        </Card>
    );
}

export default MyCard;
