import React, {useState} from 'react';
import './App.css';
import Book from "./Book";
import MyBookList from "./MyBookList";
import axios from "axios";
import {MdSearch} from 'react-icons/md'
import Thumbnail from "./Thumbnail";
import Info from "./Info";

const App = () => {
    const [optionType, setOptionType] = useState('Search');
    const [book, setBook] = useState([]);
    const [query, setQuery] = useState('');

    const onChangeOption = (e) => {
        setOptionType(e.target.value)
    };

    const updateBookList = (bookData) => {
        console.log(...bookData);
        setBook(bookData)
    };

    const base = axios.create({
        baseURL: "https://dapi.kakao.com",
        headers: {
            Authorization: "KakaoAK b4295efaba583c2e769b0b13490102af"
        }
    });

    const queryChange = (e) => {
        setQuery(e.target.value)
    };

    const bookSearch = (params) => {
        return base.get("/v3/search/book", {params})
            .then(it => it.data)
    };

    const onClickSearchButton = async () => {
        const params = {
            query: query,
        };
        const response = await bookSearch(params);
        await updateBookList(response.documents);
    };

    return (
        <div className='selectBox'>
            <select onChange={onChangeOption}>
                <option value='Search'>Search</option>
                <option value='MyList'>MyList</option>
            </select>
            <div className='contents'>
                {optionType === 'Search' ?
                    <Book book={book} updateBookList={updateBookList}/>
                    : <MyBookList book={book}/>}
            </div>

            <div className="searchBox">
                <input type="text" onChange={queryChange} value={query} placeholder="검색(제목, 저자, 출판사)"/>
                <button className="searchButton" onClick={onClickSearchButton}><MdSearch/></button>
            </div>
            <div>
                {(book.map((it, index) =>
                    <div className="ListItem" key={index}>
                        <Thumbnail thumbnail={it.thumbnail}/>
                        <Info title={it.title} author={it.authors}/>
                    </div>))}
            </div>
        </div>

    )
};


export default App;
