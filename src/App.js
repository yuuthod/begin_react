import React, { useMemo, useReducer } from 'react';

import UserList from './UserList';
import CreateUser from './CreateUser';


function countActiveUsers(users) {
  console.log('활성화된 사용자들...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
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
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state;
  }
}

// null은 default값
export const UserDispatch = React.createContext(null);

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <p>활설화된 사용자 수 : {count}</p>
    </UserDispatch.Provider>
  );
}

export default App;
