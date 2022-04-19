import {Button} from './basics/Button';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FetchRandomColors} from './ColorGetter';


export const ColorSchemer = (props) => {
	
	const setTheme = props.setTheme;
	const [pendingTheme, setPendingTheme] = useState({colors: {}});
	
	useEffect(()=> {
	setPendingTheme(props.theme)
	},[props.theme])
	
	
	return (
		<>
			
			<ColorRow
				pendingTheme={pendingTheme}
				setPendingTheme={setPendingTheme}
			/>
			
			<Button
				onClick={() => console.log(`TODO`)}
				text={`Try`} // use setTheme to set the theme to the pendingTheme but only for 10 seconds
			/>
			
			<Button
				onClick={() => console.log(`TODO`)}
				text={`Set`} // use setTheme to set the theme to the pendingTheme
			/>
		</>
	);
};

const ColorRow = (props) => {
	const pendingTheme = props.pendingTheme;
	const setPendingTheme = props.setPendingTheme;
	
	const testColors = {
		text: `rgb([200, 200, 200])`,
		header: '#cbbdbd',
	};
	
	const colors = Object.entries(pendingTheme.colors);
	console.log(colors);
	return (
		
		<div>
			<Button
				onClick={() => FetchRandomColors(setPendingTheme)}
				text={`Get Random`}
			/>
			{colors.map(([key, value]) => (
				<ColorBox
					key={key}
					color={value}
				/>
			))}
		</div>
	);
};

const ColorBox = styled.div`
  background-color: ${p => p.color};
  width: 20px;
  height: 20px;
`;

// curl 'http://colormind.io/api/' --data-binary '{"model":"default"}'
// # {"result":
// [
// [214,78,69],
// [247,242,163],
// [201,216,147],
// [57,141,112],
// [62,80,64]
// ]}