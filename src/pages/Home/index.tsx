import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { UserProfile } from '../../types/userProfile';
import {
	BlogContainer,
	IconAndTextList,
	NameAndLink,
	ProfileContainer,
} from './styles';

export function Home() {
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

	useEffect(() => {
		fetchUserData();
	}, []);

	async function fetchUserData() {
		const { data } = await api.get('users/guilherme-n');
		setUserProfile(data);
	}

	return (
		<BlogContainer>
			<ProfileContainer>
				<img src={userProfile?.avatar_url} />
				<div>
					<div>
						<NameAndLink>
							<span>{userProfile?.name}</span>
							<a href={userProfile?.html_url}>
								github <ArrowSquareOut weight='bold' size={14} />
							</a>
						</NameAndLink>
						<p>{userProfile?.bio}</p>
					</div>
					<IconAndTextList>
						<div>
							<span>
								<GithubLogo weight='fill' size={18} /> {userProfile?.login}
							</span>
						</div>
						<div>
							<span>
								<Buildings weight='fill' size={18} /> {userProfile?.company}
							</span>
						</div>
						<div>
							<span>
								<Users weight='fill' size={18} /> {userProfile?.followers}
								followers
							</span>
						</div>
					</IconAndTextList>
				</div>
			</ProfileContainer>
		</BlogContainer>
	);
}
