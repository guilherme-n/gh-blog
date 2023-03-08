import { useParams } from 'react-router-dom';
import { HeaderContainer, PostContainer } from './styles';

export function Post() {
	const { id } = useParams();

	return (
		<PostContainer>
			<HeaderContainer></HeaderContainer>
		</PostContainer>
	);
}
