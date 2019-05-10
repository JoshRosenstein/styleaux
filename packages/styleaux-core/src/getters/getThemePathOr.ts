import getTheme from './getTheme';
import { pathOr } from '@roseys/futils';

export const getThemePathOr = (input, defaultValue?: any) => (props) =>
  pathOr(defaultValue, input)(getTheme(props));

export default getThemePathOr;
