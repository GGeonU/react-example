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
`;

const BookContents = styled.p`
    margin: 0;
    font-weight: 250;
    min-width: 250px;
`;

const MyBookList = (props) => {
    console.log(props);

    const {thumbnail, title, author, contents} = props; // 비구조화 할당

    return(
        <ItemBox>
            <div>
                <Thumbnail src={thumbnail} alt="Not Image"/>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
                <BookContents>{contents}</BookContents>
            </div>
        </ItemBox>
    )
};

export default MyBookList;