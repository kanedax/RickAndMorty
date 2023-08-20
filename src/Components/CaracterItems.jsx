import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

// this compenent helps us to manage character datas such as personal details and images and...

const CharacterItems = ({ data }) => {

    const [ShowModal, setShowModal] = useState(false)
    const handleShow = () => { setShowModal(true) }
    const handleClose = () => { setShowModal(false) }

    return (
        <Card className='cart-bg'>
            <Card.Body className='m-0 p-2 border border-secondary rounded'>
                <Card.Img
                    className='hover rounded'
                    variant='top'
                    src={data.image}
                    height='220px'
                />
                <Card.Title className='mt-2 text-white text-start'>{data.name}</Card.Title>
                <Button
                    onClick={handleShow}
                    variant='btn btn-outline-secondary'
                    className='text-white mt-4'
                    style={{ width: '100%' }}
                > More Details</Button>

                <Modal show={ShowModal} onHide={handleClose} contentClassName='cart-bg'>
                    <Modal.Header className='border-0'>
                        <Modal.Body>
                            <Card.Title className='mt-2 text-white text-start'>Name: {data.name}</Card.Title>
                            <Card.Text className='mt-2 text-white text-start'>Gender: {data.gender}</Card.Text>
                            <Card.Text className='mt-2 text-white text-start'>Species: {data.species}</Card.Text>
                            <Card.Text className='mt-2 text-white text-start'>Status: {data.status}</Card.Text>
                            <Card.Text className='mt-2 text-white text-start'>Location: {data.location.name}</Card.Text>
                            <Card.Text className='mt-2 text-white text-start'>Origin: {data.origin.name}</Card.Text>
                            <Button
                                variant='btn btn-outline-secondary'
                                className='mt-4 text-white d-grid col-12 mx-auto'
                                onClick={handleClose}
                            >Close</Button>
                        </Modal.Body>
                    </Modal.Header>
                </Modal>
            </Card.Body>
        </Card>
    );
}

export default CharacterItems;
