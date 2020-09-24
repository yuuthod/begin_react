import React, { useRef, useState, useCallback, useMemo } from 'react';
import './App.css';

import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성화된 사용자들...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  },[]);

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'test1',
        email: 'test1@gmail.com',
        active: false
    },
    {
        id: 2,
        username: 'test2',
        email: 'test2@gmail.com',
        active: false
    },
    {
        id: 3,
        username: 'test3',
        email: 'test3@gmail.com',
        active: false
    },
  ]);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users => users.map((user) => user.id === id ? {...user, active: !user.active} : user))
  },[]);

  const count = useMemo(() => countActiveUsers(users), [users])
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <p>활설화된 사용자 수 : {count}</p>
    </>
  );
}

export default App;
