import '../CSS/home.css'
import { Container, Navbar, Nav, Button, Row, Col, Card } from "react-bootstrap";
import Cards from '../Components/Card'
function Home() {

  return (
    <>
       <div className="landing-page">
      {/* Header */}
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-primary fs-3">
            TLE Quiz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Button href="/quiz" variant="primary" className="ms-3">
                Start Quiz
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero d-flex align-items-center text-center bg-light py-5">
        <Container>
          <h1 className="display-4 fw-bold text-primary mb-3">
            Test Your Knowledge!
          </h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Welcome to <span className="fw-semibold text-primary">QuizMaster</span> — 
            a fun and interactive way to learn while playing! Challenge yourself and improve your skills with exciting quizzes.
          </p>
          <Button href="/quiz" variant="primary" size="lg">
            Start Now
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5 fw-bold text-primary">Quizzes</h2>
          <Row className="g-4">
            <Col md={4}>
                <Cards/>
            </Col>
            <Col md={4}>
              <Cards/>
            </Col>
            <Col md={4}>
              <Cards/>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <Container>
          <p className="mb-0">
            © {new Date().getFullYear()} QuizMaster — All Rights Reserved.
          </p>
        </Container>
      </footer>
    </div>
    </>
  )
}

export default Home
