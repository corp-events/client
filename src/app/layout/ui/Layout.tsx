import clsx from "clsx";
import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.props";

export const Layout = ({ className, children, ...props }: LayoutProps) => (
	<main className={clsx(styles.layout, className)} {...props}>
		<div className={clsx(styles.layout__inner, "container")}>{children}</div>
	</main>
);
