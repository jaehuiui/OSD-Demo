import React from "react";
import styles from "./layout.module.scss";
import classnames from "classnames";
import Sidebar from "@comp/organisms/sidebar";

export interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className={classnames(styles.wrapper)}>
			<Sidebar />
			{children}
		</div>
	);
}
