import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 7px;
        }

        ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
            background-color: #000;
        }
        @media only screen and (max-width: 768px) {
            overflow-x: hidden;
        }
    }

    body {
        background: ${props => props.theme.colors.background};
        font-family: 'Montserrat', sans-serif;
`
