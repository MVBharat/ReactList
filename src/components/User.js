import React from 'react';

const User = (props) => {
	return(<li> 
		<br/>
		<input onChange={props.changeEvent} value={props.children} />
		<br/>
		<span>| name: {props.children} | age: {props.age} </span> 
		 | <button onClick={props.delEvent}> Delete </button>
	</li>)
}

export default User