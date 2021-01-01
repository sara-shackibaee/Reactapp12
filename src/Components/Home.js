import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // BrowserHistory
    // useRouteMatch
  } from "react-router-dom";
function Home() {
    return (
        <div>
            <Container>
            <Row>
                <Col className='mycol'><image src='2.jpeg'></image><Link className='mylink' to="/Ashpazi">Ashpazi</Link></Col>
                <Col className='mycol'><image src='1.jpeg'></image><Link className='mylink' to="/Shirini">Shirini</Link></Col>
                <Col className='mycol'><image src='3.jpeg'></image><Link className='mylink' to="/Golarayi">Golarayi</Link></Col>
            </Row>
            <Row>
              <Col className='mycol'><image src='4.jpeg'></image><Link className='mylink' to="/Sport">Sport</Link></Col>
              <Col className='mycol'><image src='5.jpeg'></image><Link className='mylink' to="/Science">Science</Link></Col>
              <Col className='mycol'><image src='6.jpeg'></image><Link className='mylink' to="/Art">Art</Link></Col>
            </Row>
            <Row>
              
              <Col className='mycol'><image src='6.jpeg'></image><Link className='mylink' to="/Login">Login</Link></Col>
            </Row>
          </Container>
        </div>
    )
}
export default Home;
