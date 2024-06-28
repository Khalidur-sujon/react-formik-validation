import React, { useState } from "react";

import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";

const App = () => {
	const [view, setView] = useState("basic");

	return (
		<div className="max-w-[100vw] max-h-screen  flex flex-col items-center justify-center">
			<nav className="my-10 flex gap-2">
				<h3
					className="px-2 py-1 bg-slate-400 hover:bg-slate-500 rounded-xl hover:text-white cursor-pointer transition duration-200"
					onClick={() => setView("basic")}
				>
					Basic
				</h3>
				<h3
					className="px-2 py-1 bg-slate-400 hover:bg-slate-500 rounded-xl hover:text-white cursor-pointer transition duration-200"
					onClick={() => setView("advanced")}
				>
					Advanced
				</h3>
			</nav>

			{view === "basic" ? <BasicForm /> : <AdvancedForm />}
		</div>
	);
};

export default App;
