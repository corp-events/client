import styles from "./HomePage.module.css";
import type { HomePageProps } from "./HomePage.props";

export const HomePage = (_: HomePageProps) => (
	<div className={styles.homePage}>
		<h1>Главная</h1>
	</div>
);
