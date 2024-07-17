import React, { useEffect, useState } from 'react'
import MyCard from './MyCard'
import { Col, Container, Row } from 'react-bootstrap'

const Cardlist = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((data) => data.json()).then((data) => setData(data));
    }, [])


    return (
        <Container>
            <Row>
                {data?.map((item) => (
                    <Col md={4} key={item.id} >
                        <MyCard data={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Cardlist
