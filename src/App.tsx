import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PostProvider } from './contexts/postContext';
import { UserProfileProvider } from './contexts/userProfileContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<BrowserRouter>
				<UserProfileProvider>
					<PostProvider>
						<Router />
					</PostProvider>
				</UserProfileProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}
