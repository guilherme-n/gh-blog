import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../lib/api';
import { UserProfile } from '../types/userProfile';

interface UserProfileProps {
	userProfile: UserProfile | null;
	fetchUser: () => void;
}
const UserProfileContext = createContext({} as UserProfileProps);

export function UserProfileProvider({ children }: { children: ReactNode }) {
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

	async function fetchUser() {
		const { data } = await api.get('users/guilherme-n');
		setUserProfile(data);
	}

	return (
		<UserProfileContext.Provider value={{ userProfile, fetchUser }}>
			{children}
		</UserProfileContext.Provider>
	);
}

export const useUserProfile = () => useContext(UserProfileContext);
