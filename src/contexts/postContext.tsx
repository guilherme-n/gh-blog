import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../lib/api';
import { Posts } from '../types/posts';

interface PostProps {
	posts: Posts | null;
	fetchPostsData: (query?: string) => void;
}
const PostContext = createContext({} as PostProps);

export function PostProvider({ children }: { children: ReactNode }) {
	const [posts, setPosts] = useState<Posts | null>(null);

	async function fetchPostsData(query: string = '') {
		const { data } = await api.get(
			`search/issues?q=${query}repo:guilherme-n/gh-blog`
		);
		setPosts(data);
	}

	return (
		<PostContext.Provider value={{ posts, fetchPostsData }}>
			{children}
		</PostContext.Provider>
	);
}

export const usePosts = () => useContext(PostContext);
