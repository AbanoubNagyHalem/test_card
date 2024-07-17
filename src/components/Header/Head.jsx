import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Head = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='m-5'>Looking for somthing special?!</h1>
            <Form className='m-5' style={{ width: '24rem' }}>
                <Form.Group className="mb-3 d-flex w-100" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="name@example.com" />
                    <Button>Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Head
