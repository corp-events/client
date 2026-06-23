import type { Route } from "next";

const createRoute = (route: string) => route as Route;

export const routes = {
	home: createRoute("/"),
} as const;
