import React from "react";
import styles from "./sidebar.module.scss";
import classnames from "classnames";

export default function Sidebar() {
	return (
		<div className={classnames(styles.wrapper)}>
			<nav></nav>
		</div>
	);
}
