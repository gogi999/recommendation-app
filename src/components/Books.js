import React, { useState } from 'react';
import { Button, Card, Container, Form, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AppHeader from './AppHeader';
import BookCard from './BookCard';
import RecommendedBook from './RecommendedBook';
import googleBooksApi from '../utils/googleBooksAPI';

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [randomBook, setRandomBook] = useState([]);
    const [randNum, setRandNum] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchTerm);
    }

    const handleSearch = async (bookTitle) => {
        const res = await googleBooksApi.get("/search", {
            params: {
                q: bookTitle
            }
        });
        setBooks(res.data.items);
        setDisabled(false);
    };

    const recommendedBook = () => {
        setRandNum(Math.floor(Math.random() * 10) + 1);
        setRandomBook(books[randNum]);
        setOpenModal(true);
    };

    if (openModal === true) {
        return <RecommendedBook randomBook={randomBook} setOpenModal={setOpenModal} openModal={openModal} />;
    }

    return (
        <div style={{ marginTop: "23px" }}>
            <Container textAlign="center">
                <AppHeader />
                <Form onSubmit={handleSubmit}>
                    <Input 
                        fluid 
                        icon='search'
                        type="text"
                        placeholder="Enter the book title..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                
                </Form>
                <div style={{ marginTop: "9px" }}>
                    <Button 
                        fluid
                        color="green" 
                        onClick={recommendedBook} 
                        disabled={disabled}
                    >
                        Search the books and choose recommended
                    </Button>
                </div>
                <div style={{ marginTop: "23px"}}>
                    <Card.Group 
                        itemsPerRow="4" 
                        stackable 
                        style={{ marginRight: "5px", marginLeft: "5px"}}
                    >
                        {books.map((book, i) => (
                            <BookCard
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                pageCount={book.volumeInfo.pageCount}
                                publisher={book.volumeInfo.publisher}
                                ratingsCount={book.volumeInfo.ratingsCount}
                                averageRating={book.volumeInfo.averageRating}
                            />
                        ))}
                    </Card.Group>
                </div>
            </Container>
        </div>  
    );
}

export default Books;
