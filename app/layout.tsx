import { Layout } from "@/app/layout";
import "@/shared/styles/global.css";
import "@/shared/styles/reset.css";
import "@/shared/styles/var.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Корпоративные мероприятия",
	description: "Корпоративная платформа для управления мероприятиями",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
