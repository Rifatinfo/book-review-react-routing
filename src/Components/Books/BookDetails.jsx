import { useLoaderData, useParams } from "react-router";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/localStorage";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    // console.log(typeof id, typeof bookId);
    const data = useLoaderData();
    console.log(data, id);
    const click = data.find(book => book.bookId === id);
    console.log(click);
    const { image, bookName, publisher } = click;

    const handleMarkAsRead = (id) =>{
          addToStoredReadList(id);
    }

    const handleMarkAsWishList = (id) =>{
           addToStoredWishList(id);
    }

    return (
        <div>
            <h1 className="text-center">BookDetails : {bookId}</h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">
                            {publisher}
                        </p>
                        <div className="flex gap-3">
                            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-error text-white">Read</button>
                            <button onClick={() => handleMarkAsWishList(bookId)} className="btn btn-outlet shadow-xl">WhishList</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;