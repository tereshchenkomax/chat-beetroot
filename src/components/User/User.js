import React from 'react'

const User = ({users}) => {
	return (
		<div>
			{Object.keys(users).map(id => <li key={id}>{users[id]}</li>)}
		</div>
	)
}

export default User