import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Calender from './Calender';
import TypoLogo from '@/components/icons/TypoLogo';

const ActivityCalendar = () => {
	const [username, setUsername] = useState('');
	const [usernameValue, setUsernameValue] = useState('');
	// const deferredUsername = useDeferredValue(usernameValue);
	// console.log({ usernameValue });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			localStorage.setItem('githubUsername', username);
			setUsernameValue(username);
		} catch (error) {
			console.error('Error in handleSubmit:', error);
		}
	};

	useEffect(() => {
		try {
			const storedUsername = localStorage.getItem('githubUsername');
			if (storedUsername) {
				setUsername(storedUsername);
				setUsernameValue(storedUsername);
			}
		} catch (error) {
			console.error('Error in useEffect:', error);
		}
	}, []);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center">
			<div className="text-center">
				<div>
					<TypoLogo className="mx-auto mb-8 h-auto" width={200} />
				</div>
				<h1 className="text-4xl font-bold">GitHub Contributions Calendar</h1>
				<p className="mt-2 text-lg text-gray-600">Enter your GitHub username</p>
				<form onSubmit={handleSubmit}>
					<div className="mt-6 flex items-center justify-center space-x-4">
						<Input
							type="text"
							className="w-64"
							placeholder="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<Button type="submit">Show calendar</Button>
					</div>
				</form>
			</div>
			<Calender username={usernameValue} />
		</div>
	);
};

export default ActivityCalendar;
