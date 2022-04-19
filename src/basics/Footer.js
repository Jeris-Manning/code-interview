import styled from 'styled-components';

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.footer};
  padding: 8px 0;
`;

const TextStyle = styled.h3`
  color: ${props => props.theme.colors.text};
`;

export const Footer = (props) => (
	<DivStyle>
		<TextStyle>
			{props.children}
		</TextStyle>
	</DivStyle>
);
