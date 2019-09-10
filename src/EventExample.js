import React, {useState, useEffect} from 'react'

const EventExample = ({aaa, action}) => {

    const [form, setForm] = useState({
        username: '',
        nickname: ''
    });

    const {username, nickname} = form;

    useEffect(() => {
        console.log(username);
        console.log(nickname);
    }, [username]);

    const handleChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm)
    };

    const handleClick = () => {
        alert("제 이름은 " + username + "이고 별명은 " + nickname + "입니다.");
        setForm({
            username: '',
            nickname: ''
        });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    };

    return (
        <div>
            <h1>이벤트 example</h1>
            <input type="text" name="username" placeholder="이름" value={username} onChange={handleChange}
                   onKeyPress={onKeyPress}/>
            <input type="text" name="nickname" placeholder="별명" value={nickname} onChange={handleChange}
                   onKeyPress={onKeyPress}/>
            <button onClick={action}>alert</button>

            <p>이름: {username}</p>
            <p>별명: {nickname}</p>
        </div>
    )
};

export default EventExample;