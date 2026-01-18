import React from "react";
import { useLocation } from "react-router-dom";
import { usePageTransition } from "./PageTransitionProvider";

export default function TransitionLink({ to, children, ...props }) {
	const location = useLocation();
	const { navigateWithTransition } = usePageTransition();

	return (
		<a
			href={to}
			onClick={(e) => {
				e.preventDefault();
				if (to === location.pathname) return;
				navigateWithTransition(to);
			}}
			{...props}
		>
			{children}
		</a>
	);
}
