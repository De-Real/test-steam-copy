import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');


	* {
	padding: 0;
	margin: 0;
	border: 0;
	}

*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}
a:focus,
a:active {
	outline: none;
}
nav,
footer,
header,
aside {
	display: block;
}

html,
body {
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
	font-family: inherit;
}

input::-ms-clear {
	display: none;
}
button {
	cursor: pointer;
}
button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: 400;
}

	#root{
		width: 1171px;
		background: #171A21;
		padding: 35px 15px;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1 1 auto;
		padding: 45px 10px 15px 10px;
	}

	@media (max-width: 768px){
		main {
			padding: 30px 10px 15px 10px;
		}
	}

	@media (max-width: 480px){
		main {
			padding: 15px 5px 15px 5px;
		}
	}
	
  body {
	margin: 0 auto; 
	 background-color: #1A120B;
    font-family: 'Inter', sans-serif;
	 color: #FFFFFF;
	 display: flex;
	 justify-content: center;
  }

  body > #root  {
		min-height: 100vh;
		background: #171A21;
		overflow-y: auto;
	}
`;

export default GlobalStyle;
