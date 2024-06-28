import { useField } from "formik";
import React from "react";

const CustomSelectInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="flex flex-col gap-1">
			<label>{label}</label>
			<select
				{...field}
				{...props}
				className={` form__input ${
					meta.touched && meta.error
						? "border-red-500"
						: "border-gray-400"
				}`}
			/>
			{/* error message */}
			{meta.touched && meta.error && (
				<p className="text-[14px] text-red-700">{meta.error}</p>
			)}
		</div>
	);
};

export default CustomSelectInput;
