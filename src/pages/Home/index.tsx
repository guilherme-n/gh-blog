import { useEffect } from 'react';
import { api } from '../../lib/api';
import { BlogContainer } from './styles';

export function Home() {
	useEffect(() => {
		fetchUserData();
	}, []);

	async function fetchUserData() {
		const { data } = await api.get('users/guilherme-n');
		console.log({ data });
	}

	return (
		<BlogContainer>
			<h1>HOME</h1>
		</BlogContainer>
	);
}
