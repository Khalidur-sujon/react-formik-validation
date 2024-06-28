import { Form, Formik } from "formik";
import React from "react";
import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";
import CustomSelectInput from "./CustomSelectInput";
import CustomCheckBox from "./CustomCheckBox";

const onSubmit = async (values, actions) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

const AdvancedForm = () => {
	return (
		<Formik
			initialValues={{ username: "", jobType: "", acceptedTos: false }}
			validationSchema={advancedSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className="flex flex-col gap-3 ">
					<CustomInput
						label="Username"
						name="username"
						type="text"
						placeholder="Enter your name"
					/>
					<CustomSelectInput
						label="Job Type"
						name="jobType"
						placeholder="Select a job"
					>
						<option value="">Please select a job type</option>
						<option value="developer">Developer</option>
						<option value="designer">Designer</option>
						<option value="manager">Product Manager</option>
						<option value="other">Other</option>
					</CustomSelectInput>

					<CustomCheckBox type="checkbox" name="acceptedTos" />

					<button
						type="submit"
						disabled={isSubmitting}
						className="px-2 py-1 w-full rounded-md bg-blue-400 hover:bg-blue-500"
					>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default AdvancedForm;
