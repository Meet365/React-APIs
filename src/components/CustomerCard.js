import Card from "react-bootstrap/Card";

function CustomerCard(props) {
  return (
    <>
      <Card border="info" style={{ width: "18rem" }} className="m-3 hover:shadow-xl"> 
        <Card.Header>{props.Head}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.comment}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CustomerCard;
