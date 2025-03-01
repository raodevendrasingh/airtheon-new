import { Link } from "react-router";

import brandWordmarkDark from "@/assets/brand/wordmark/brand-wordmark-dark.png";
import brandWordmarkLight from "@/assets/brand/wordmark/brand-wordmark-light.png";
import brandIconDark from "@/assets/brand/icon/brand-icon-dark-transparent.png";
import brandIconLight from "@/assets/brand/icon/brand-icon-light-transparent.png";

export const BrandWordmarkLogo = () => {
	return (
		<Link to="/" className="self-center">
			<img
				src={brandWordmarkLight}
				alt="Airtheon Logo"
				width={180}
				height={180}
				className="hidden dark:block"
			/>

			<img
				src={brandWordmarkDark}
				alt="Airtheon Logo"
				width={180}
				height={180}
				className="block dark:hidden"
			/>
		</Link>
	);
};

export const BrandIconLogo = () => {
	return (
		<Link to="/" className="self-center">
			<img
				src={brandIconLight}
				alt="Airtheon Logo"
				width={100}
				height={100}
				className="hidden dark:block"
			/>

			<img
				src={brandIconDark}
				alt="Airtheon Logo"
				width={100}
				height={100}
				className="block dark:hidden"
			/>
		</Link>
	);
};
