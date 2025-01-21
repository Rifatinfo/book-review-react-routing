import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [bookReviews, setBookReviews] = useState([]);

    useEffect(() => {
        fetch('/booksData.json') 
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setBookReviews(data))
            .catch((error) => console.error("Error fetching books data:", error));
    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 md:max-w-6xl md:mx-auto">
                {bookReviews.map((bookReview) => (
                    <Book key={bookReview.id} bookReview={bookReview} />
                ))}
            </div>
        </div>
    );
};

export default Books;
