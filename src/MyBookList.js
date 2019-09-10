import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const ItemBox = styled.div`
    display: flex;
    width: 85%;
    height: 180px;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    background: white;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px -16px -6px rgba(0,0,0, 0.025); 
`;

const Thumbnail = styled.img`
    position: relative;
    width: 110px;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px -36px -8px rgba(0,0,0, 0.025); 
`;

const BookTitle = styled.h3`
    margin: 0;
    min-width: 850px;
    font-weight: 400;
    font-size: 18px;
    color: #2c2c2c;
  
`;

const BookAuthor = styled.h5`
    font-weight: 400;
    min-width: 850px;
    margin: 10px 0 0;
    
`;

const BookContents = styled.p`
    font-weight: 200;
    min-width: 850px;
    margin: 10px 0 0;
`;

const MyBookList = ({myBook, action}) => {
    const [myBookItems, setMyBookItems] = useState([]);

    useEffect(() => {
        setMyBookItems(myBook);
        console.log(myBook)
    }, [myBook]); // myBook이 변할 때만

    const onDeleteButtonClick = (e) => {
        action(e.target.id); // id 받아 비교해 삭제
    };

    return (
        <div>
            {myBookItems.map(item =>
                <ItemBox key={item.isbn}>
                    <div>
                        <Thumbnail src={item.thumbnail} alt="Not Image"/>
                    </div>
                    <div>
                        <BookTitle>{item.title}</BookTitle>
                        <BookAuthor>{item.author}</BookAuthor>
                        <BookContents>{item.contents} ...</BookContents>
                    </div>
                    <div>
                        <button id={item.isbn} onClick={onDeleteButtonClick}>delete</button>
                    </div>
                </ItemBox>)}
        </div>
    )
};

export default MyBookList;