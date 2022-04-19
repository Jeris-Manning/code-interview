import styled from 'styled-components';

const DivStyle = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  flex-direction: column;
  
  padding: 20px 0;
`;

export const Body = (props) => (
	<DivStyle>
		{props.children}
	</DivStyle>
);