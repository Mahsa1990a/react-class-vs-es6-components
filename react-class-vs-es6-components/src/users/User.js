import React from 'react';

const User = (props) => {

  // if one of them didnt have age, dont display it
  let age = props.age ? props.age : 'NA';

  //check if there is info (name) so show it, otherwise Invalid Entry:
  if (props.children) {

    return(
      <div>
        {/* User functional component test */}
        Name: {props.children} | Age: {age}
      </div>
    )
  } else {
    return (<div>Invalid Entry!</div>)
  }
}

export default User;