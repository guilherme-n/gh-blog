import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../lib/api';
import { UserProfile } from '../types/userProfile';

interface UserProfileProps {
	userProfile: UserProfile | null;
	fetchUserData: () => void;
}
const UserProfileContext = createContext({} as UserProfileProps);

export function UserProfileProvider({ children }: { children: ReactNode }) {
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

	async function fetchUserData() {
		const { data } = await api.get('users/guilherme-n');
		setUserProfile(data);
	}

	return (
		<UserProfileContext.Provider value={{ userProfile, fetchUserData }}>
			{children}
		</UserProfileContext.Provider>
	);
}

export const useUserProfile = () => useContext(UserProfileContext);
