import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { Posts } from '../types/posts';

interface PostProps {
	posts: Posts | null;
	setPosts: Dispatch<SetStateAction<Posts | null>>;
}
const PostContext = createContext({} as PostProps);

export function PostProvider({ children }: { children: ReactNode }) {
	const [posts, setPosts] = useState<Posts | null>(null);

	return (
		<PostContext.Provider value={{ posts, setPosts }}>
			{children}
		</PostContext.Provider>
	);
}

export const usePosts = () => useContext(PostContext);
