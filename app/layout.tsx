import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import "@/theme/globals.scss";

export const metadata: Metadata = {
	title: "Home page",
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>{children}</body>
		</html>
	);
}
