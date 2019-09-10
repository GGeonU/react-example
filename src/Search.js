import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import MyBookList from "./MyBookList";
import axios from "axios";
import {MdSearch} from 'react-icons/md'
import Info from "./Info";
import styled from "styled-components";

const Section = styled.section`
    height: 100%;
    display: block;
    justify-content: center;
   
`;

const SelectBox = styled.select`
    width: min-content;
`;

const SearchResult = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 70px 50px 50px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    overflow-scrolling: auto;
    overflow: auto;
`;

const SearchInput = styled.input`
    background: white none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: black;
    flex: 1;
`;

const SearchButton = styled.button`
    background: #868e96 none;
    outline: none;
    border: none;
    color: white;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
`;

const AddButton = styled.button`
    height: min-content;
    margin-top: auto;
    margin-bottom: 0;
`


const SelectDiv = styled.div`
    width: 768px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
`;

const SearchTab = styled.div`
    width: 768px;
    max-width: 768px;
    height: 10%;
    display: flex;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
`;

const BookList = styled.div`
    width: 47%;
    height: 250px ;
    background-color: white;
    margin-bottom: 70px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    overflow-scrolling: inherit;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    cursor: pointer;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  
`;

const SearchDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
`;


const Search = () => {
    const [optionType, setOptionType] = useState('Search');
    const [book, setBook] = useState([]);
    const [query, setQuery] = useState('');
    const [myBook, setMyBook] = useState([]);

    const onChangeOption = useCallback((e) => {
        setOptionType(e.target.value);
    }, []);

    const updateBookList = (bookData) => {
        setBook(bookData.map(it => ({...it, isMyBook: false})));
    };


    const queryChange = useCallback((e) => {
        setQuery(e.target.value)
    }, []);

    const base = axios.create({
        baseURL: "https://dapi.kakao.com",
        headers: {
            Authorization: "KakaoAK b4295efaba583c2e769b0b13490102af",
        }
    });

    const bookSearch = (params) => {
        return base.get("/v3/search/book", {params})
            .then(it => it.data)
            .then(it => it.documents)
    };

    const onClickSearchButton = async () => { // 비동기 처리
        const params = {
            query: query,
            size: 10
        };
        const response = await bookSearch(params);
        await updateBookList(response);
    };

    const onClickBookList = (e) => {
        let index = book.findIndex(it => it.isbn === e.target.id);
        console.log(index);
        setMyBook(myBook.concat(book[index]));
        alert("추가되었습니다");
    };

    const onClickDeleteButton = (id) => {
        setMyBook(myBook.filter(item => item.isbn !== id)) // isbn === click한 object의 id 값 필터링
    };

    return (
        <Section>
            <SelectDiv>
                <SelectBox onChange={onChangeOption}>
                    <option value='Search'>Search</option>
                    <option value='MyList'>MyList</option>
                </SelectBox>
            </SelectDiv>

            {optionType === 'Search' ?
                <SearchDiv>
                    <SearchTab>
                        <SearchInput type="text" onChange={queryChange} value={query}
                                     placeholder="검색(제목, 저자, 출판사)"/>
                        <SearchButton className="searchButton"
                                      onClick={onClickSearchButton}><MdSearch/></SearchButton>
                    </SearchTab>
                    <SearchResult>
                        {(book.map((it, index) =>
                            <BookList key={index}>
                                <Info thumbnail={it.thumbnail} title={it.title} author={it.authors}
                                      publisher={it.publisher}/>
                                <AddButton id={it.isbn} onClick={onClickBookList}>add List</AddButton>
                            </BookList>))}
                    </SearchResult>
                </SearchDiv>
                : <MyBookList myBook={myBook} action={onClickDeleteButton}/>}

        </Section>

    )
};


export default Search;
