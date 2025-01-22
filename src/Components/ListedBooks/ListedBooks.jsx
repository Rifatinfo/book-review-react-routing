
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/localStorage';
import Book from '../Books/Book';
const ListedBooks = () => {
    const [readList, setReadList] = useState([]);   
    const [sort, setSort] = useState('');
    const handleSorting = (sortByItem) =>{
        setSort(sortByItem);
        if(sortByItem === "Rating"){
           const ratingSort = [...readList].sort((a,b) => a.rating - b.rating);
           setSort(ratingSort);
        }
    }
    const allBooks = useLoaderData();
    console.log(allBooks);
    useEffect(() => {
       const storedReadList = getStoredReadList();
       const storedReadListInt = storedReadList.map(id => parseInt(id));
       console.log(storedReadList, storedReadListInt);

       const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
       console.log(readBookList);
       setReadList(readBookList);

    },[]);
    
    return (
        <div>
            <h1 className='text-center'></h1>
            <div className='flex items-center justify-center'>
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">{sort ? `${sort}` : "sort By" }</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li onClick={() => handleSorting("Rating")}><a>Rating</a></li>
                <li onClick={() => handleSorting("Number of pages")}><a>Number of pages</a></li>
                <li onClick={() => handleSorting("Publisher year")}><a>Publisher year</a></li>
            </ul>
            </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Book</Tab>
                    <Tab>WishList Book</Tab>
                </TabList>

                <TabPanel>
                   <div className='grid grid-cols-3 gap-5'>
                   {
                        readList.map(bookReview => <Book key={bookReview.bookId} bookReview={bookReview}></Book>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;