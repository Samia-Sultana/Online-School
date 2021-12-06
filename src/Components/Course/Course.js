import React from 'react';
import Cart from '../Cart/Cart';
import './Course.css'
import { Card, Button } from 'react-bootstrap';

const Course = (props) => {
    const {name,Instructor,price,info,duration} = props.courseInfo;
    return (
            <Card style={{ width: '18rem' }} className="eachCourse">
                <Card.Body>
                    <Card.Title>
                      <div className="twinContainer">
                          <p>{name}</p>
                          <p><small>${price}</small></p>
                      </div>
                      <div className="twinContainer">
                          <p>by:{Instructor}</p>
                          <p><small>Period:{duration}</small></p>
                      </div>
                    </Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                    <div className="enroll d-flex justify-content-end">
                    <Button variant="primary" onClick={() => props.handleEnrollButton(props.courseInfo)}>enroll now</Button>
                    </div>
                </Card.Body>
            </Card>

    );
};

export default Course;