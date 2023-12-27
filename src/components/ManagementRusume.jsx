import React, { useState, useContext , useEffect} from 'react';
import { Rusume_Context } from '../context/RusumeContext';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default function ManagementRusume() {

  const { managementRusume, getResumesPerUser } = useContext(Rusume_Context);
  const [resumePerUser, setResumePerUser] = useState([])

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResumesPerUser();
        setResumePerUser(data);
      } catch (error) {
        console.error('Error fetching data:', error);
       }
    };
  
    fetchData();
  }, []);
  

return (
  <>


    <Container>
      <Row>
        {resumePerUser.map((item) => (
          <Col key={item.userId} xs={12} md={6} lg={4}>
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.fullNmae}</Card.Title>
                <Card.Text>
                  Experience Years: {item.experienceYears}
                  <br />
                  Current Company: {item.currentCompany}
                  <br />
                  Current Experience Years: {item.currentExperienceYears}
                  <br />
                  Study Details: {item.studyDetails}
                </Card.Text>
                <Button variant="primary">Edit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    <Link to="/formRusume">
      <Button>Create Rusume</Button>
    </Link>
  </>
)
}
