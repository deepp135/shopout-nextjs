import React from 'react';

function AddUser({ handleOnSubmit, setUserDetails, userDetails }) {
	return (
		<form onSubmit={handleOnSubmit} >
			<div>
				Name:
				<input
					name="name"
					type="text"
					value={userDetails.name}
					onChange={(e) =>
						setUserDetails((prev) => {
							return { ...prev, name: e.target.value };
						})
					}
					placeholder="Enter your name"
				></input>
			</div>
			<div>
				Phone Number:
				<input
					value={userDetails.phone}
					name="phone"
					onChange={(e) =>
						setUserDetails((prev) => {
							return { ...prev, phone: e.target.value };
						})
					}
					type="text"
					placeholder="Enter your phone number"
				></input>
			</div>
			<button type="submit">Save</button>
		</form>
	);
}

export default AddUser;
