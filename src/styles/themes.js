import { createGlobalStyle } from 'styled-components';
import { transitionDelay } from '../constants/stylingVariables';

const lightTheme = {
  bodyBackground: '#fafafa',
  elementsBG: '#ffffff',
  input: '#858585',
  fontColor: '#000',
  shadow: '#7b7b7b'
};

const darkTheme = {
  bodyBackground: '#202c37',
  elementsBG: '#2b3945',
  input: '##fafafa',
  fontColor: '#ffffff',
  shadow: '#171918'
};

const GlobalStyles = createGlobalStyle`
body {
    background-color: ${props => props.theme.bodyBackground};
    transition: background-color ${transitionDelay};
    margin: 0;
}`;

export { lightTheme, darkTheme, GlobalStyles };
