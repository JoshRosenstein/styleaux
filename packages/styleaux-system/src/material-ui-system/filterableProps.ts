// import { bordersConfig } from "./configs/borders";
// import { flexboxConfig } from "./configs/flexbox";
// import { paletteConfig } from "./configs/palette";
// import { spacingConfig } from "./configs/spacing";
// import { sizingConfig } from "./configs/sizing";
// import { displayConfig } from "./configs/display";
// import { boxShadowConfig } from "./configs/shadows";
// import { typographyConfig } from "./configs/typography";
// import { positionsConfig } from "./configs/positions";

// export { style } from "./style";
// const getFilterableProps = obj => {
//   return obj.prop || obj.cssProp;
// };

// const mapGetFilterableProps = arr => {
//   return arr.map(o => getFilterableProps(o));
// };
// console.log(
//   JSON.stringify({
//     borders: mapGetFilterableProps(bordersConfig),
//     flexbox: mapGetFilterableProps(flexboxConfig),
//     palette: mapGetFilterableProps(paletteConfig),
//     spacing: mapGetFilterableProps(spacingConfig),
//     sizing: mapGetFilterableProps(sizingConfig),
//     display: mapGetFilterableProps(displayConfig),
//     shadows: mapGetFilterableProps([boxShadowConfig]),
//     typography: mapGetFilterableProps(typographyConfig),
//     positions: mapGetFilterableProps(positionsConfig)
//   })
// );

// console.log(
//   JSON.stringify([
//     ...mapGetFilterableProps(bordersConfig),
//     ...mapGetFilterableProps(flexboxConfig),
//     ...mapGetFilterableProps(paletteConfig),
//     ...mapGetFilterableProps(spacingConfig),
//     ...mapGetFilterableProps(sizingConfig),
//     ...mapGetFilterableProps(displayConfig),
//     ...mapGetFilterableProps([boxShadowConfig]),
//     ...mapGetFilterableProps(typographyConfig),
//     ...mapGetFilterableProps(positionsConfig)
//   ])
// );

export const allFilterableProps = [
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderColor',
  'borderRadius',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignItems',
  'alignContent',
  'order',
  'flex',
  'flexGrow',
  'flexShrink',
  'alignSelf',
  'color',
  'bgcolor',
  'pl',
  'px',
  'p',
  'padding',
  'pr',
  'px',
  'p',
  'padding',
  'pt',
  'py',
  'p',
  'padding',
  'pb',
  'py',
  'p',
  'padding',
  'mt',
  'my',
  'm',
  'margin',
  'mb',
  'my',
  'm',
  'margin',
  'ml',
  'mx',
  'm',
  'margin',
  'mr',
  'mx',
  'm',
  'margin',
  'width',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'display',
  'displayPrint',
  'boxShadow',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textAlign',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'css',
]
export const filterablePropsByType = {
  borders: [
    'border',
    'borderTop',
    'borderRight',
    'borderBottom',
    'borderLeft',
    'borderColor',
    'borderRadius',
  ],
  flexbox: [
    'flexDirection',
    'flexWrap',
    'justifyContent',
    'alignItems',
    'alignContent',
    'order',
    'flex',
    'flexGrow',
    'flexShrink',
    'alignSelf',
  ],
  palette: ['color', 'bgcolor'],
  spacing: [
    'pl',
    'px',
    'p',
    'padding',
    'pr',
    'px',
    'p',
    'padding',
    'pt',
    'py',
    'p',
    'padding',
    'pb',
    'py',
    'p',
    'padding',
    'mt',
    'my',
    'm',
    'margin',
    'mb',
    'my',
    'm',
    'margin',
    'ml',
    'mx',
    'm',
    'margin',
    'mr',
    'mx',
    'm',
    'margin',
  ],
  sizing: ['width', 'maxWidth', 'minWidth', 'height', 'maxHeight', 'minHeight'],
  display: ['display', 'displayPrint'],
  shadows: ['boxShadow'],
  typography: ['fontFamily', 'fontSize', 'fontWeight', 'textAlign'],
  positions: ['position', 'zIndex', 'top', 'right', 'bottom', 'left'],
}
