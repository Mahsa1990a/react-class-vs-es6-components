import React from 'react';

const User = (props) => {
  return(
    <div>
      {/* User functional component test */}
      Name: {props.children} | Age: {props.age}
    </div>
  )
}

export default User;