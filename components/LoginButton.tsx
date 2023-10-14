import React from "react";
import { Button } from "@nextui-org/react";

const LoginButton: React.FC = () => {
	return (
        <a href="/api/auth/signin">
		<Button color="primary" radius="sm">
			Log in
		</Button>
        </a>
	);
};

export default LoginButton;
