import styled from 'styled-components';

export const PostContainer = styled.main`
	width: 864px;
	margin: 0 auto 50px;
`;
export const HeaderContainer = styled.div`
	display: flex;
	gap: 2rem;
	background-color: ${(props) => props.theme.profile};
	padding: 2rem 2.5rem;
	margin-top: -88px;

	img {
		width: 148px;
		height: 148px;
		border-radius: 6px;
	}
	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-grow: 1;
		padding-top: 0.5rem;
	}
`;

export const BackAndGithubButtons = styled.div``;
