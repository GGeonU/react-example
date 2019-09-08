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

const MyBookList = (props) => {
    console.log(props);

    const {title} = props;

    return(
        <ItemBox>
            <div>
                <Thumbnail src={props.thumbnail} alt="Not Image"/>
            </div>
            <div>
                <h3>{title}</h3>
                {/*<p>{props.author}</p>*/}
            </div>
        </ItemBox>
    )
};

export default MyBookList;