import React from "react";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./NavigationLogout.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

const renderTooltip = (props) => (
	<Tooltip id="logout-tooltip" {...props}>
		Logout
	</Tooltip>
);

const NavigationLogout = () => {
	return (
		<OverlayTrigger
			placement="bottom"
			delay={{ show: 250, hide: 400 }}
			overlay={renderTooltip}
		>
			<Button className="logout_button" variant="secondary">
				<BsBoxArrowUpRight />
			</Button>
		</OverlayTrigger>
	);
};

export default NavigationLogout;
