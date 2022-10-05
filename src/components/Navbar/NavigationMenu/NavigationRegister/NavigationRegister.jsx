import React from "react";
import Button from "react-bootstrap/Button";
import "../../../../utils/navigation_button.css";

const NavigationRegister = () => (
	<div style={{ padding: "10px" }}>
		<Button href="/~easy-study/account/create" className="menu_button">
			Register
		</Button>
	</div>
);

export default NavigationRegister;
