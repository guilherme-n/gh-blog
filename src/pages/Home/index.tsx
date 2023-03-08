import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
import { NavLink } from 'react-router-dom';
import { useUserProfile } from '../../contexts/userProfileContext';
import { usePosts } from '../../contexts/postContext';

export function Home() {
	const { userProfile, fetchUser } = useUserProfile();
	const { posts, fetchPosts } = usePosts();
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (!userProfile) fetchUser();
		if (!posts) fetchPosts();
	}, []);

	function handleSearchPostText(event: ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value);
	}

	useCallback(() => {
		const funcId = setTimeout(fetchPosts, 700);

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
						<NavLink to={`/post/${post.number}`} key={post.number}>
							<Post>
								<div>
									<span>{post.title}</span>
									<span>{formatDistanceToNow(new Date(post.created_at))}</span>
								</div>
								<p>{post.body}</p>
							</Post>
						</NavLink>
					);
				})}
			</PostList>
		</BlogContainer>
	);
}
