import React from 'react';
import { Modal, Image, Button } from 'semantic-ui-react';

const RecommendedBook = ({ openModal, setOpenModal, randomBook }) => {
    return (
       <Modal
            size="medium"
            centered
            onClose={() => setOpenModal(false)}
            onOpen={() => setOpenModal(true)}                
            open={openModal}
        >
            <Modal.Content image>
                <Image
                    size="medium"
                    src={randomBook.volumeInfo.imageLinks.thumbnail}
                    wrapped
                />
                <Modal.Description>
                    <h3>Recommended Book is: </h3>
                    <p>{randomBook.volumeInfo.title}</p>
                    <p>{randomBook.volumeInfo.publisher}</p>
                    <p>Page Count: {randomBook.volumeInfo.pageCount}</p>
                    <a href={randomBook.volumeInfo.previewLink}>Read this book online</a>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button 
                    inverted
                    color="green" 
                    onClick={() => setOpenModal(false)}
                >
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default RecommendedBook;
