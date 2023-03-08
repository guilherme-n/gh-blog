import styled from 'styled-components';

export const BlogContainer = styled.main`
	width: 864px;
	margin: 0 auto 50px;
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
		padding-top: 0.5rem;
	}
`;

export const NameAndLink = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

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

export const PublicationsCount = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4.5rem;

	span:first-child {
		color: ${(props) => props.theme.subtitle};
		font-size: 1.125rem;
		font-weight: bold;
	}
`;

export const SearchPostInput = styled.input`
	padding: 0.75rem 1rem;
	margin-top: 0.75rem;
	width: 100%;
	border-radius: 6px;
	border: 1px solid ${(props) => props.theme.border};
	background-color: ${(props) => props.theme.input};
	color: ${(props) => props.theme.white};

	::placeholder {
		color: ${(props) => props.theme.label};
	}
`;

export const PostList = styled.div`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;

	a {
		text-decoration: none;
		color: ${(props) => props.theme.text};
	}
`;

export const Post = styled.div`
	background-color: ${(props) => props.theme.post};
	padding: 2rem;
	border-radius: 10px;
	height: 16.25rem;
	overflow: hidden;

	color: & > div {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.25rem;

		span:first-child {
			color: ${(props) => props.theme.white};
			font-size: 1.25rem;
		}
		span:last-child {
			font-size: 0.875rem;
			min-width: fit-content;
		}
	}

	p {
		text-align: justify;
		overflow: hidden;
	}
`;
