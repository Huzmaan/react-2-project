import React from 'react';
import {Card,Button} from 'react-bootstrap'
import images from "../Assets/img/car.jpg"
import images1 from "../Assets/img/car1.jpg"
function Main({ }) {
    return (
        <>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={images} />
  <Card.Body className="cardbody">
    <Card.Title> <b> SLC 300 </b></Card.Title>
    <Card.Text>
      <b>Seating 2 person <br/>
        HorsePower 241hp <br/>
        MPG 23/32 <br/>
        <h5>Starting at<br/>$49,950</h5>
      </b>
    </Card.Text>
    <Button  href="https://www.google.com/"variant="primary">Go To More Detail</Button>
  </Card.Body>
</Card>
        </div>

        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={images1} height="215rem" />
  <Card.Body className="cardbody">
    <Card.Title> <b> SLC43 AMG </b></Card.Title>
    <Card.Text>
      <b>Seating 2 person <br/>
        HorsePower 241hp <br/>
        MPG 23/32 <br/>
        <h5>Starting at<br/>$49,950</h5>
      </b>
    </Card.Text>
    <Button  href="https://www.google.com/"variant="primary">Go To More Detail</Button>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={images1} height="215rem" />
  <Card.Body className="cardbody">
    <Card.Title> <b> SLC43 AMG </b></Card.Title>
    <Card.Text>
      <b>Seating 2 person <br/>
        HorsePower 241hp <br/>
        MPG 23/32 <br/>
        <h5>Starting at<br/>$49,950</h5>
      </b>
    </Card.Text>
    <Button  href="https://www.google.com/"variant="primary">Go To More Detail</Button>
  </Card.Body>
</Card>
        </div>
        
        </div>
     </> 
    )
}

export default Main