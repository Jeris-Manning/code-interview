import styled from 'styled-components';


const StyledButton = styled.button`
  background: ${props => props.theme.colors.button};
  margin: 8px;
  padding: 16px 24px;
  
  &:hover {
    background: ${props => props.theme.colors.buttonHover};
  }

  &:active {
    background: ${props => props.theme.colors.buttonActive};
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;

const TextStyle = styled.p`
  color: ${props => props.theme.colors.text};
  margin: 0;
  font-size: 24px;
`;

export const Button = (props) => {
	const {
		onClick,
		text,
	} = props;
	
	return (
		<StyledButton
			onClick={onClick}
		>
			<TextStyle>
				{text}
			</TextStyle>
		</StyledButton>
	);
};