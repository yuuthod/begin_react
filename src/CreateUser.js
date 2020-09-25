import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';

function CreateUser() {
    const dispatch = useContext(UserDispatch);
    const [{username, email}, onChange, onReset] = useInputs({
        username: '',
        email: ''
    });
    const nextId = useRef(4);
    return (
        <div>
            <input 
                name="username"
                placeholder="계정명"
                onChange={(onChange)}
                value={username}
                type="text"
            />
            <input 
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
                type="text"
            />
            <button onClick={() => {
                dispatch({
                    type: 'CREATE_USER',
                    user: {
                        id: nextId.current,
                        username,
                        email
                    }
                });
                onReset();
                nextId.current += 1;
            }}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser)
