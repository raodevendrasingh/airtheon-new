import { Outlet } from "react-router";

export default function AuthLayout() {
	return (
		<main>
			<h1 className="bg-green-300 text-black flex items-center justify-center">Auth</h1>
			<div className="">
				<Outlet />
			</div>
		</main>
	);
}
