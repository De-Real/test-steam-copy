import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ErrorWrapperProps = {
	error: { message: string; title: string };
};

const ErrorWrapper = ({ error }: ErrorWrapperProps) => {
	const navigate = useNavigate();

	const redirectUser = useCallback(() => {
		const searchParams = new URL(window.location.href).searchParams;

		navigate(`/main/pages/1?${searchParams.toString()}`);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => redirectUser(), 7500);

		return () => clearTimeout(timeout);
	}, [redirectUser]);

	return (
		<div style={{ textAlign: "center" }}>
			<p>{error.title}</p>
			<p>{error.message}</p>
			<p> You will be redirected in 10 seconds</p>
		</div>
	);
};

export default ErrorWrapper;
