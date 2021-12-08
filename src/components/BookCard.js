import React from 'react';
import { Button, Card, Popup } from 'semantic-ui-react';

const BookCard = ({ 
  image,
  title,
  authors,
  description,
  pageCount,
  averageRating,
  ratingsCount,
  publisher  
}) => {
  return (
    <Card fluid centered color="blue">
      <Card.Content extra>
        <img alt={title} src={image} style={{ height: "233px" }} />
      </Card.Content>
      <Card.Content style={{ overflow: "auto", maxHeight: "233px" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Description style={{ fontSize: "18px", marginBottom: "9px" }}>
          {authors}
        </Card.Description>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Popup
          on="click"
          content={
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Description>Publisher: {publisher}</Card.Description>
                <Card.Description>Page Count: {pageCount}</Card.Description>
                <Card.Description>
                  Average Rating: {averageRating}
                </Card.Description>
                <Card.Description>
                  Ratings Count: {ratingsCount}
                </Card.Description>
              </Card.Content>
            </Card>
          }
          trigger={<Button color="blue" fluid compact content="Details" />}
        />
      </Card.Content>
    </Card>
  );
}

export default BookCard;
