import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { UserProfile } from '../types/userProfile';

interface UserProfileProps {
	userProfile: UserProfile | null;
	setUserProfile: Dispatch<SetStateAction<UserProfile | null>>;
}
const UserProfileContext = createContext({} as UserProfileProps);

export function UserProfileProvider({ children }: { children: ReactNode }) {
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

	return (
		<UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
			{children}
		</UserProfileContext.Provider>
	);
}

export const useUserProfile = () => useContext(UserProfileContext);
