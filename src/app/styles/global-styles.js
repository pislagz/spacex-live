import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke: 1px transparent;
	-moz-osx-font-smoothing: grayscale;
}

html,
body {
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-family: 'Rajdhani', sans-serif !important;
    height: 100%;
    width: 100%;
	min-height: 100%;
}

#root{
	height: 100%;
	width: 100%;
}

`;
