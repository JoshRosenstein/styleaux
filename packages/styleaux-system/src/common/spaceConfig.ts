export const paddingLeftConfig = [
  {cssProp: 'paddingLeft', prop: 'pl'},
  {cssProp: 'paddingLeft', prop: 'px'},
  {cssProp: 'paddingLeft', prop: 'p'},
  // {cssProp: 'paddingLeft', prop: 'padding'},
]

export const paddingRightConfig = [
  {cssProp: 'paddingRight', prop: 'pr'},
  {cssProp: 'paddingRight', prop: 'px'},
  {cssProp: 'paddingRight', prop: 'p'},
  //{cssProp: 'paddingRight', prop: 'padding'},
]

export const paddingTopConfig = [
  {cssProp: 'paddingTop', prop: 'pt'},
  {cssProp: 'paddingTop', prop: 'py'},
  {cssProp: 'paddingTop', prop: 'p'},
  //{cssProp: 'paddingTop', prop: 'padding'},
]

export const paddingBottomConfig = [
  {cssProp: 'paddingBottom', prop: 'pb'},
  {cssProp: 'paddingBottom', prop: 'py'},
  {cssProp: 'paddingBottom', prop: 'p'},
  // {cssProp: 'paddingBottom', prop: 'padding'},
]

export const marginTopConfig = [
  {cssProp: 'marginTop', prop: 'mt'},
  {cssProp: 'marginTop', prop: 'my'},
  {cssProp: 'marginTop', prop: 'm'},
  // {cssProp: 'marginTop', prop: 'margin'},
]

export const marginBottomConfig = [
  {cssProp: 'marginBottom', prop: 'mb'},
  {cssProp: 'marginBottom', prop: 'my'},
  {cssProp: 'marginBottom', prop: 'm'},
  // {cssProp: 'marginBottom', prop: 'margin'},
]

export const marginLeftConfig = [
  {cssProp: 'marginLeft', prop: 'ml'},
  {cssProp: 'marginLeft', prop: 'mx'},
  {cssProp: 'marginLeft', prop: 'm'},
  // {cssProp: 'marginLeft', prop: 'margin'},
]

export const marginRightConfig = [
  {cssProp: 'marginRight', prop: 'mr'},
  {cssProp: 'marginRight', prop: 'mx'},
  {cssProp: 'marginRight', prop: 'm'},
  //{cssProp: 'marginRight', prop: 'margin'},
]

export const spacingConfig = [
  ...paddingLeftConfig,
  ...paddingRightConfig,
  ...paddingTopConfig,
  ...paddingBottomConfig,
  ...marginTopConfig,
  ...marginBottomConfig,
  ...marginLeftConfig,
  ...marginRightConfig,
]
