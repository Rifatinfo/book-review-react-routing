import { Link } from "react-router";


const Book = ({ bookReview }) => {
    const {bookId, image, bookName } = bookReview;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card bg-base-100  shadow-xl">
                    <figure>
                        <img
                            className="h-72 w-72"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p>{bookName}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-error text-white">View Details</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;
