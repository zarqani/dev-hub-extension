import React, { useEffect } from 'react';
import ActivityCalendar from './ActivityCalendar';

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_: Error): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error('Caught an error:', error, errorInfo);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

export default function NewTab(): JSX.Element {
	useEffect(() => {
		const handleError = (event: ErrorEvent): void => {
			console.error('Uncaught error:', event.error);
		};

		const handleUnhandledRejection = (event: PromiseRejectionEvent): void => {
			console.error('Unhandled promise rejection:', event.reason);
		};

		window.addEventListener('error', handleError);
		window.addEventListener('unhandledrejection', handleUnhandledRejection);

		return () => {
			window.removeEventListener('error', handleError);
			window.removeEventListener(
				'unhandledrejection',
				handleUnhandledRejection
			);
		};
	}, []);

	return (
		<ErrorBoundary>
			<main className="min-h-screen">
				<ActivityCalendar />
			</main>
		</ErrorBoundary>
	);
}
