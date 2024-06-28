import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
	console.log("values---->", values);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

const BasicForm = () => {
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			email: "",
			age: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: basicSchema,
		onSubmit,
	});

	return (
		<form
			onSubmit={handleSubmit}
			autoComplete="off"
			className="flex flex-col justify-center gap-3"
		>
			{/* Email */}
			<div className="flex flex-col gap-1">
				<label className="form__label" htmlFor="email">
					Email
				</label>
				<input
					id="email"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
					className={` form__input  ${
						errors.email && touched.email
							? "border-red-500"
							: "border-gray-400"
					}`}
					type="email"
					placeholder="Enter your email"
				/>
				{/* error message */}
				{errors.email && touched.email && (
					<p className="text-[14px] text-red-700">{errors.email}</p>
				)}
			</div>

			{/* Age */}
			<div className="flex flex-col gap-1">
				<label className="form__label" htmlFor="age">
					Age
				</label>
				<input
					id="age"
					value={values.age}
					onChange={handleChange}
					onBlur={handleBlur}
					className={` form__input  ${
						errors.age && touched.age
							? "border-red-500"
							: "border-gray-400"
					}`}
					type="number"
					placeholder="Enter your age"
				/>
				{/* error message */}
				{errors.age && touched.age && (
					<p className="text-[14px] text-red-700">{errors.age}</p>
				)}
			</div>

			{/* Password */}
			<div className="flex flex-col gap-1">
				<label className="form__label" htmlFor="password">
					Password
				</label>
				<input
					id="password"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
					className={` form__input  ${
						errors.password && touched.password
							? "border-red-500"
							: "border-gray-400"
					}`}
					type="password"
					placeholder="Enter your password"
				/>
				{/* error message */}
				{errors.password && touched.password && (
					<p className="text-[14px] text-red-700">
						{errors.password}
					</p>
				)}
			</div>

			{/* Confrim password */}
			<div className="flex flex-col gap-1">
				<label className="form__label" htmlFor="confirmPassword">
					Confirm Password
				</label>
				<input
					id="confirmPassword"
					value={values.confirmPassword}
					onChange={handleChange}
					onBlur={handleBlur}
					className={` form__input  ${
						errors.confirmPassword && touched.confirmPassword
							? "border-red-500"
							: "border-gray-400"
					}`}
					type="password"
					placeholder="Confirm Password"
				/>
				{/* error message */}
				{errors.confirmPassword && touched.confirmPassword && (
					<p className="text-[14px] text-red-700">
						{errors.confirmPassword}
					</p>
				)}
			</div>

			{/* Button */}
			<button
				type="submit"
				disabled={isSubmitting}
				className="px-2 py-1 rounded-md bg-blue-400 hover:bg-blue-500"
			>
				Submit
			</button>
		</form>
	);
};

export default BasicForm;
