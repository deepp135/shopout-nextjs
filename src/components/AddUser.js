import React from 'react';

function AddUser({ handleOnSubmit, setUserDetails, userDetails }) {
	return (
		// <form onSubmit={handleOnSubmit} >
			<div className='chat-login-part'>
				<div class="login">
					<div class="container">
						<div class="login-container-wrapper clearfix">
							<div class="logo">
								<i class="fa fa-sign-in"></i>
							</div>
							<div class="welcome"><strong>Welcome,</strong> please login</div>

							<form onSubmit={handleOnSubmit} class="form-horizontal login-form">
								<div class="form-group relative">
									<input
										name="name"
										className="form-control input-lg"
										type="text"
										value={userDetails.name}
										onChange={(e) =>
											setUserDetails((prev) => {
												return { ...prev, name: e.target.value };
											})
										}
										placeholder="Name"
									/>
									<i class="fa fa-user"></i>
								</div>
								<div class="form-group relative password">
									<input
										value={userDetails.phone}
										name="phone"
										class="form-control input-lg"
										onChange={(e) =>
											setUserDetails((prev) => {
												return { ...prev, phone: e.target.value };
											})
										}
										type="text"
										placeholder="Enter your phone number"
									/>
									<i class="fa fa-phone"></i>
								</div>
								<div class="form-group login-btn">
									<button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		// {/* </form> */}
	);
}

export default AddUser;
