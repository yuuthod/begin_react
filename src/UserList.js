import React,{ useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'red' : 'green',
                }}
                onClick={() => {
                    dispatch({type: 'TOGGLE_USER', id: user.id});
                }}
            >{user.username}</b>
            <span>{user.email}</span>
            <button onClick={() => {
                dispatch({type: 'REMOVE_USER', id: user.id});
            }}>삭제</button>
        </div>
    );
});

function UserList({users}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
            {/* user안에 id값이 없다면 */}
            {/* {user.map((user, index) => (
                <User user={user} key={index}/>
            ))} */}
        </div>
    );
}

export default React.memo(UserList)
