import React from "react";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./NavigationProfile.css";
import { BsFillGearFill, BsBoxArrowUpRight } from "react-icons/bs";

const renderTooltip = (props) => (
	<Tooltip id="profile-tooltip" {...props}>
		Check and edit profile.
	</Tooltip>
);
const renderLogoutTooltip = (props) => (
	<Tooltip id="logout-tooltip" {...props}>
		Logout
	</Tooltip>
);

const NavigationProfile = () => {
	return (
		<div className="profile_section">
			<span>Mark Otto</span>
			<div style={{ "margin-top": "10px" }}>
				<OverlayTrigger
					placement="bottom"
					delay={{ show: 250, hide: 400 }}
					overlay={renderTooltip}
				>
					<Button className="profile_button" variant="secondary">
						<BsFillGearFill className="gear_position" />
					</Button>
				</OverlayTrigger>
				<OverlayTrigger
					placement="bottom"
					delay={{ show: 250, hide: 400 }}
					overlay={renderLogoutTooltip}
				>
					<Button className="logout_button" variant="secondary">
						<BsBoxArrowUpRight />
					</Button>
				</OverlayTrigger>
			</div>
		</div>
	);
};

export default NavigationProfile;
