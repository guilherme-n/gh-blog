import styled from 'styled-components';

export const PostContainer = styled.main`
	width: 864px;
	margin: 0 auto 50px;

	p {
		padding: 2.5rem 2rem;
		text-align: justify;
	}
`;
export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.profile};
	padding: 2rem 2.5rem;
	margin-top: -88px;

	& > span {
		color: ${(props) => props.theme.white};
		font-size: 1.5rem;
		font-weight: bold;
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
		line-height: 130%;
	}
`;

export const BackAndGithubButtons = styled.div`
	display: flex;
	justify-content: space-between;

	span {
		color: ${(props) => props.theme.white};
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: ${(props) => props.theme.blue};
		text-decoration: none;
		text-transform: uppercase;
		font-size: 0.75rem;
		font-weight: bold;
	}
`;

export const IconAndTextList = styled.div`
	display: flex;
	gap: 1.5rem;

	span {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		line-height: 100%;

		svg {
			color: ${(props) => props.theme.label};
		}
	}
`;
