import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { Posts } from '../../types/posts';
import { UserProfile } from '../../types/userProfile';
import {
	BlogContainer,
	IconAndTextList,
	NameAndLink,
	ProfileContainer,
	PublicationsCount,
	SearchPostInput,
	PostList,
	Post,
} from './styles';
import { formatDistanceToNow } from 'date-fns';

export function Home() {
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
	const [posts, setPosts] = useState<Posts | null>(null);
	const [query, setQuery] = useState('');

	useEffect(() => {
		fetchUserData();
		fetchPostsData();
	}, []);

	async function fetchUserData() {
		const { data } = await api.get('users/guilherme-n');
		setUserProfile(data);
	}

	async function fetchPostsData() {
		const { data } = await api.get('search/issues?q=repo:guilherme-n/gh-blog');
		setPosts(data);
	}

	function handleSearchPostText(event: ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value);
	}

	useEffect(() => {
		const funcId = setTimeout(async () => {
			console.log('searching', query);
			const { data } = await api.get(
				`search/issues?q=${query}repo:guilherme-n/gh-blog`
			);
			setPosts(data);
		}, 700);

		return () => {
			clearTimeout(funcId);
		};
	}, [query]);

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
						{userProfile?.company && (
							<div>
								<span>
									<Buildings weight='fill' size={18} /> {userProfile.company}
								</span>
							</div>
						)}
						<div>
							<span>
								<Users weight='fill' size={18} />
								{`${userProfile?.followers} followers`}
							</span>
						</div>
					</IconAndTextList>
				</div>
			</ProfileContainer>

			<PublicationsCount>
				<span>Publications</span>
				<span>{posts?.total_count} publications</span>
			</PublicationsCount>

			<SearchPostInput
				placeholder='Search content'
				onChange={handleSearchPostText}
			/>

			<PostList>
				{posts?.items.map((post) => {
					return (
						<Post key={post.number}>
							<div>
								<span>{post.title}</span>
								<span>{formatDistanceToNow(new Date(post.created_at))}</span>
							</div>
							<p>{post.body}</p>
						</Post>
					);
				})}
			</PostList>
		</BlogContainer>
	);
}
