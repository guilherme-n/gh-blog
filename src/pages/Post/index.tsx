import {
	ArrowSquareOut,
	CalendarBlank,
	CaretLeft,
	GithubLogo,
	Users,
} from 'phosphor-react';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { usePosts } from '../../contexts/postContext';
import { useUserProfile } from '../../contexts/userProfileContext';
import {
	BackAndGithubButtons,
	HeaderContainer,
	IconAndTextList,
	PostContainer,
} from './styles';
import { formatDistanceToNow } from 'date-fns';

export function Post() {
	const { postId } = useParams();
	const { userProfile, fetchUserData } = useUserProfile();
	const { posts } = usePosts();

	useEffect(() => {
		if (!userProfile) {
			fetchUserData();
		}
	}, []);

	const post = posts?.items.find((p) => p.number.toString() === postId);

	return (
		<PostContainer>
			<HeaderContainer>
				<BackAndGithubButtons>
					<NavLink to='/'>
						<CaretLeft weight='bold' size={14} />
						back
					</NavLink>
					<a href={userProfile?.html_url}>
						github <ArrowSquareOut weight='bold' size={14} />
					</a>
				</BackAndGithubButtons>
				<span>{post?.title}</span>
				<IconAndTextList>
					<span>
						<GithubLogo weight='fill' size={18} /> {userProfile?.login}
					</span>
					{post && (
						<span>
							<CalendarBlank weight='fill' size={18} />{' '}
							{formatDistanceToNow(new Date(post.created_at))}
						</span>
					)}

					<span>
						<Users weight='fill' size={18} />
						{`${post?.comments} comments`}
					</span>
				</IconAndTextList>
			</HeaderContainer>
			<p>{post?.body}</p>
		</PostContainer>
	);
}
