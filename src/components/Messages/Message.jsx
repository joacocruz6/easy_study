import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "./message.css";

const Message = (props) => {
	const type = props.type;
	const content = props.content;
	const extra = props.extraData === null ? "" : props.extraData;
	const [show, setShow] = useState(true);
	if (show) {
		return (
			<>
				<Alert
					className="message"
					variant={type}
					onClose={() => setShow(false)}
					dismissible
				>
					<p>{content}</p>
				</Alert>
				{extra}
			</>
		);
	}
	return <></>;
};

export default Message;
