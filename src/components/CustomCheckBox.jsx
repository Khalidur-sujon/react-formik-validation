import { useField } from "formik";
import React from "react";

const CustomCheckBox = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<div className="flex gap-1">
				<input
					{...field}
					{...props}
					className={` form__input ${
						meta.touched && meta.error
							? "border-red-500"
							: "border-gray-400"
					}`}
				/>
				<span>I accept the terms of service</span>
			</div>
			{/* error message */}
			{meta.touched && meta.error && (
				<p className="text-[14px] text-red-700">{meta.error}</p>
			)}
		</>
	);
};

export default CustomCheckBox;
