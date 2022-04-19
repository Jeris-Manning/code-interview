import styled from 'styled-components';

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.header};
  
  padding: 20px 0;
`;

const TextStyle = styled.h1`
  color: ${props => props.theme.colors.text};
`;

export const Header = (props) => (
	<DivStyle>
		<TextStyle>
			{props.children}
		</TextStyle>
	</DivStyle>
);