import React,{useEffect} from 'react'

const User = React.memo(function User({ user, onRemove, onToggle }) {
    useEffect(()=>{
        // console.log(user);
        // console.log('user start');
        return(()=> {
            // console.log(user);
            // console.log('user before')
        });
    }, [user]);
    return (
        <div>
            <b
                onClick={() => onToggle(user.id)}
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'red' : 'green',
                }}
            >{user.username}</b>
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)} id={user.id}>삭제</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
            {/* user안에 id값이 없다면 */}
            {/* {user.map((user, index) => (
                <User user={user} key={index}/>
            ))} */}
        </div>
    );
}

export default React.memo(UserList)
