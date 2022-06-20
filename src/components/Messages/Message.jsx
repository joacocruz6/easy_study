import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const dismissableAlert = (props) => {
	const alertType = props.alertType;
	const alertMessage = props.message;
	const [show, setShow] = useState(true);
	if (show) {
		return (
			<>
				<Alert
					variant={alertType}
					onClose={() => setShow(false)}
					dismissible
				>
					<p>{alertMessage}</p>
				</Alert>
			</>
		);
	}
	return <></>;
};

export default dismissableAlert;
