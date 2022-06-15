import React from "react";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./NavigationProfile.css";
import { BsFillGearFill } from "react-icons/bs";
import NavigationLogout from "../NavigationLogout/NavigationLogout.jsx";

const renderTooltip = (props) => (
	<Tooltip id="profile-tooltip" {...props}>
		Check and edit profile.
	</Tooltip>
);

const NavigationProfile = (props) => {
	const logout = props.logout;
	return (
		<div className="profile_section">
			<span>Mark Otto</span>
			<div style={{ "margin-top": "10px" }}>
				<OverlayTrigger
					placement="bottom"
					delay={{ show: 250, hide: 400 }}
					overlay={renderTooltip}
				>
					<Button
						href="/profile"
						className="profile_button"
						variant="secondary"
					>
						<BsFillGearFill className="gear_position" />
					</Button>
				</OverlayTrigger>
				<NavigationLogout logout={logout} />
			</div>
		</div>
	);
};

export default NavigationProfile;
