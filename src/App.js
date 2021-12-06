import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import Body from './Components/Body/Body';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import { Container,Row,Col } from 'react-bootstrap';

function App() {
  
    const [courses,setCourses] = useState([]);
    function handleEnrollButton(data){
        const margeInto = [...courses,data];
        setCourses(margeInto);
    }
     
    
  return (
    <Container fluid className="app">
     <Row className="header">
          <Header></Header>
     </Row>
     <Row className="body">
        <Col md={9}>
          <Body handleEnrollButton={handleEnrollButton}></Body>
        </Col>
        <Col md={3}>
          <Cart courseInfo={courses}></Cart>
        </Col>
     </Row>
     
    </Container>
  );
}

export default App;
