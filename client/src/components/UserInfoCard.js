import React from "react";
import { Card, Image } from "semantic-ui-react";

function UserInfoCard({ studentData }) {
	const { fullname, email, cgpa, usn, profilepic } = studentData;

	return (
		<Card centered>
			<Image src={profilepic} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{`${fullname}`}</Card.Header>
				<Card.Meta>
					<span>Student</span>
				</Card.Meta>
				<Card.Meta>
					<span>USN: {usn}</span>
				</Card.Meta>
				<Card.Meta>
					<span>Email: {email}</span>
				</Card.Meta>
				<Card.Description>{`${fullname} is a student with ${cgpa.toFixed(2)} CGPA.`}</Card.Description>
			</Card.Content>
		</Card>
	);
}

export default UserInfoCard;
