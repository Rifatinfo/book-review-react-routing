
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/localStorage';
import Book from '../Books/Book';
const ListedBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    const [readList, setReadList] = useState([]);   
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