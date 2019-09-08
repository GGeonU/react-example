import React from 'react';
import styled from "styled-components";

const Thumbnail = styled.img`
    width: 150px;
    height: 225px;
    margin-right: 10px;
    display: flex;
`;

const ItemBox = styled.div`
    display: flex;
    width: 45%;
    margin-bottom: 70px;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px -16px -6px rgba(0,0,0, 0.025); 
`;

const Image = styled.img`
    position: relative;
    top: -50px;
    width: 130px;
    height: 210px;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px -36px -8px rgba(0,0,0, 0.025); 
`;

const BookTitle = styled.h3 `
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    min-width: 275px;
    color: #2c2c2c;
    margin-bottom: 10px;
`;

const BookAuthor = styled.h5`
    margin: 0;
    font-weight: 300;
    min-width: 250px;
`;



const Info = (props) => {
    const {thumbnail, title, author, is} = props;

    return (
        <ItemBox>
            <div>
                <Image src={thumbnail} alt="Not Image"/>
            </div>
            <div>
                <BookTitle>{title}</BookTitle>
                <BookAuthor>{author}</BookAuthor>
            </div>
        </ItemBox>
    )
};

export default Info;