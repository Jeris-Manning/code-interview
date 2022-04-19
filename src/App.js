import logo from './logo.svg';
import styled, {ThemeProvider} from 'styled-components';
import {Header} from './basics/Header';
import {Footer} from './basics/Footer';
import {useState} from 'react';
import {Button} from './basics/Button';
import {Body} from './basics/Body';
import {Page} from './basics/Page';
import {ColorSchemer} from './ColorSchemer';

export const THEME_DEFAULT = {
	colors: {
		text: '#000',
		header: '#be3e3e',
		footer: '#d28a8a',
		background: '#d59898',
		button: '#ff0000',
		buttonHover: '#ff5151',
		buttonActive: '#a60202',
	},
};


export const App = () => {
	const [theme, setTheme] = useState(THEME_DEFAULT);
	
	return (
		<Layout
			theme={theme}
			header={`That's no way to get a header in life 😬`}
			footer={`A good footer is quite the... feet 🙄`}
		>
			<ColorSchemer
				theme={theme}
				setTheme={setTheme}
			/>
		</Layout>
	);
};

const Layout = (props) => {
	const {
		theme,
		header,
		footer,
		children,
	} = props;
	
	return (
		<ThemeProvider theme={theme}>
			<Page>
				<Header>{header}</Header>
				<Body>{children}</Body>
				<Footer>{footer}</Footer>
			</Page>
		</ThemeProvider>
	);
};
