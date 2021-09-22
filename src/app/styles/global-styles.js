import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
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
	font-family: 'HelveticaNeue', sans-serif !important;
    height: 100%;
    width: 100%;
	overflow-x: hidden;
	overscroll-behavior-y: none;
}


#root{
	//set to 100vh to prevent background bounce on mobile toolbars collapse
	height: 100vh;
	width: 100%;
}

`;
