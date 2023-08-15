import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function TaskNav({data , setter}) {
    

    const [input,setinput]=useState("")
    const arama=(e,data)=>{
        const gelen=e.target.value
        setinput(gelen)
        
    }
    function refresh() {
        const esitle = data.filter((veri) => veri.title.includes(input))
        setter(esitle)
        
       
        
        return
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                onChange={arama} value={input}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button onClick={refresh} variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )
}
