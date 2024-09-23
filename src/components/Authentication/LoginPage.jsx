import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./LoginPage.css";

const LoginPage = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (formData) => console.log(formData);

	return (
		<section className="align_center form_page">
			<form action="" className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
				<h2>Login Form</h2>
				<div className="form_inputs">
					<div>
						<label htmlFor="name">Name</label>
						<input id="name" type="text" className="form_text_input" placeholder="Enter your name" {...register("name")} />
					</div>
					<div>
						<label htmlFor="phone">Phone Number</label>
						<input
							id="phone"
							type="number"
							className="form_text_input"
							placeholder="Enter your phone number"
							{...register("phone", { valueAsNumber: true })}
						/>
					</div>

					<button className="search_button form_submit">Submit</button>
				</div>
			</form>
		</section>
	);
};

export default LoginPage;
