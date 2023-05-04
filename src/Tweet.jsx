import { Card } from "react-bootstrap";

export default function Tweet(props) {
  return (
    <>
      <Card
        style={{
          width: "50rem",
          display: "flex",
          margin: "auto",
          marginBottom: "30px",
        }}
      >
        <Card.Body key={props.id}>
          <Card.Text>{props.text}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {props.date}
          </Card.Subtitle>
          <Card.Subtitle>{props.device}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}
