import styled from 'styled-components';

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
`;

export const Page = (props) => (
	<DivStyle>
		{props.children}
	</DivStyle>
);