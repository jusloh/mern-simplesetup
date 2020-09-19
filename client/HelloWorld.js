import React from 'react'
import { hot } from 'react-hot-loader'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Justin',
  lastName: 'Perez'
};

const HelloWorld = () => {
  return (
    <div>
     <h1>Hello {formatName(user)}!</h1>
    </div>
   )
}

export default hot(module)(HelloWorld) 