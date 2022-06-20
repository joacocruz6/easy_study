import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "./message.css";

const Message = (props) => {
	const type = props.type;
	const content = props.content;
	const extra = props.extraData === null ? "" : props.extraData;
	const [show, setShow] = useState(true);
	let dismiss = () => setShow(false);
	if (props.onDismiss) {
		dismiss = () => {
			props.onDismiss();
			setShow(false);
		};
	}
	if (show) {
		return (
			<>
				<Alert
					className="message"
					variant={type}
					onClose={dismiss}
					dismissible
				>
					<p>{content.map((element) => element)}</p>
				</Alert>
				{extra}
			</>
		);
	}
	return <></>;
};

export default Message;
