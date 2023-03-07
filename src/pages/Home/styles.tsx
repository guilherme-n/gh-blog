import styled from 'styled-components';

export const BlogContainer = styled.main`
	width: 864px;
	margin: 0 auto;
`;

export const ProfileContainer = styled.div`
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
	}
`;

export const NameAndLink = styled.div`
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
		line-height: 100%;
	}
`;

export const IconAndTextList = styled.div`
	display: flex;
	gap: 1.5rem;

	& > div {
		display: flex;
		align-items: center;

		span {
			gap: 0.5rem;
			line-height: 100%;
			display: flex;
			align-items: center;
			color: ${(props) => props.theme.white};

			svg {
				color: ${(props) => props.theme.label};
			}
		}
	}
`;
