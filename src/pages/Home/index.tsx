import { useEffect } from 'react';
import { api } from '../../lib/api';

export function Home() {
	useEffect(() => {
		fetchUserData();
	});
	async function fetchUserData() {
		const { data } = await api.get('users/guilherme-n');
		console.log({ data });
	}
	return (
		<div>
			<h1>HOME</h1>
		</div>
	);
}
