import React from 'react'
import Answer from '../Answer/Answer';
import Question from '../Question/Question';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function GamePlay({ updateQuestion, answers, question }) {

  const [active, setActive] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [gameOverScore, setGameOverScore] = React.useState(-1);
  const [bestScore, setBestScore] = React.useState(0);

  const callback = (gameOverScore) => {
    if (gameOverScore !== -1) {
      setGameOverScore(gameOverScore);
      setBestScore(0);
      setShow(true);
    }
    else {
      updateQuestion();
      setActive(true);
    }

  }

  return (
    <Row className="justify-content-md-center">
      <Modal show={show} onHide={() => {
        setShow(false); updateQuestion();
        setActive(true);
      }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Container>
              <Row className="justify-content-center"> Game Over!!!</Row>
            </Container>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            {gameOverScore}
          </Row>
          <Row className="justify-content-center">
            {bestScore}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShow(false); updateQuestion();
            setActive(true);
          }}>
            Play Again
            </Button>
          <Button variant="secondary" onClick={() => { window.location.href = "/rank" }}>
            Top Rank
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid>
        <Row className="justify-content-center my-4">
          <Question text={question}></Question>
        </Row>
        <Row className="justify-content-between my-lg-4 my-md-4">
          <Answer text={answers[0]} callback={callback} active={active} setActive={setActive}></Answer>
          <Answer text={answers[1]} callback={callback} active={active} setActive={setActive}></Answer>
        </Row>
        <Row className="justify-content-between my-lg-4 my-md-4">
          <Answer text={answers[2]} callback={callback} active={active} setActive={setActive}></Answer>
          <Answer text={answers[3]} callback={callback} active={active} setActive={setActive}></Answer>
        </Row>
      </Container>
    </Row>
  )
}
