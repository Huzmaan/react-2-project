import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import Car from '../Assets/img/car.jpg';

function Main({ }) {
    return (
        <>
        <div style={{flexWrap="30px"}}>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Car} />
                <Card.Body>
                    <Card.Title>A-Class</Card.Title>
                    <Card.Text>
                    He Mercedes-Benz A-Class is a subcompact executive car (regular subcompact in its first two generations) produced by the German automobile 
                    manufacturer Mercedes-Benz. The first generation (W168) was introduced in 1997, the second generation model (W169) appeared in late 2004 
                    and the third generation model (W176) was launched in 2012. The fourth generation model (W177), which was launched in 2018, will mark the 
                    first time the A-Class is offered in the United States and Canada.[1] This fourth generation A-Class will also be the first to be offered both 
                    as a hatchback (W177) and sedan (V177).[2]
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <b>Price $50000</b></ListGroupItem>
                    <ListGroupItem>0 Meter</ListGroupItem>
                    <ListGroupItem>Manufacturer	
                                   Daimler-Benz (1997–1998)
                                   DaimlerChrysler (1998–2007)
                                   Daimler AG (2007–present)
                                   Production	1997–present</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Car} />
                <Card.Body>
                    <Card.Title>A-Class</Card.Title>
                    <Card.Text>
                    He Mercedes-Benz A-Class is a subcompact executive car (regular subcompact in its first two generations) produced by the German automobile 
                    manufacturer Mercedes-Benz. The first generation (W168) was introduced in 1997, the second generation model (W169) appeared in late 2004 
                    and the third generation model (W176) was launched in 2012. The fourth generation model (W177), which was launched in 2018, will mark the 
                    first time the A-Class is offered in the United States and Canada.[1] This fourth generation A-Class will also be the first to be offered both 
                    as a hatchback (W177) and sedan (V177).[2]
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <b>Price $50000</b></ListGroupItem>
                    <ListGroupItem>0 Meter</ListGroupItem>
                    <ListGroupItem>Manufacturer	
                                   Daimler-Benz (1997–1998)
                                   DaimlerChrysler (1998–2007)
                                   Daimler AG (2007–present)
                                   Production	1997–present</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        </div>
     </> 
    )
}

export default Main