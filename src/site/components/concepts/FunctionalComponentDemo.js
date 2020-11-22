import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';

const FunctionalComponetsDemo = function () {
    return(
        <Container className='main'>
            <Row>
                <Col xs='12'>
                    <h1>Functional Componet</h1>
                    <p>Functional Componet are the primarily tool in React to build a small, modular piece of your page...</p>

                    <dl>
                        <dt>Can use state</dt>
                        <dd>With the 'useSte' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Older class components use 'this', functional comonets have no 'this' objects.</dd>
                        <dt>Can use effects</dt>
                        <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element, but this elemnt may have nested elements inside</dd>


                    </dl>
                    <h1>Functional Syntax versus Arrow Function</h1>
                </Col>
            </Row>
            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md='6'>
                    <HelloWorldFatArrow className='logo' />
                </Col>
                <Col md='6'>
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionalComponetsDemo; 


const HelloWorld = function () {
    return(
        <div>
            <Card>
                <img width='100%' height='280px' src='https://i.ytimg.com/vi/BwAakf_VUV8/maxresdefault.jpg' alt='Card Cap' />
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pr>const HelloWorld= function()</pr></CardText>
                    <Button>Go SOmewhere, Yo</Button>
                </CardBody>
            </Card>
        </div>
    )
}

const HelloWorldFatArrow = () => {
    return(
    <div>
        <Card>
            <img width='100%' height='280px' src='https://i.ytimg.com/vi_pfXEv9cFGE/maxresdefault.jpg' alt='Card cap' />
            <CardBody>
                <CardTitle>Fat Arrow</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText><pre>const HellowWord = () => </pre></CardText>
                <Button>Go Somewehre man</Button>
            </CardBody>
        </Card>
    </div>
)}