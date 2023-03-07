import { Outlet } from 'react-router-dom';
import { HeaderContainer } from './styles';

export function DefaultLayout() {
	return (
		<>
			<HeaderContainer></HeaderContainer>
			<Outlet />
		</>
	);
}
