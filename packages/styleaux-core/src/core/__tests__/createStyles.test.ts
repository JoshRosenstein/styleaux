import { createStyles } from "../createStyles";
import {Arg1} from '../../types'

const media = {
  small: "@media (min-width: 30em)",
  medium: "@media (min-width: 40em)",
  large: "@media (min-width: 50em)"
};

const theme = {
  media,
  space: {
    all: [0, 10, 20, 30, 60],
    M: [0, 5, 10, 20, 20]
  },
  myValue: 100
};
type ITheme= typeof theme
type IMedia=typeof media

type IStylesArg=Arg1<typeof styles>
type TestTuple=Array<[string,IStylesArg,any]>

const s = {
  h: { height: "100vh" },
  w: (input: number | string) => ({ width: input }),
  size: [
    (input: number | string) => ({ width: input }),
    (input: number | string) => ({ height: input })
  ]
};

const styles = createStyles<typeof s,ITheme,IMedia >(s);

const THEME= theme

 describe("basics", () => {
  const basicData:TestTuple=[
    [ 'boolean height', { h: true },[{ height: "100vh" }]],
    [ 'width px', { w: "10px" },[{ width: "10px" }]],
    [ 'w px & bool h', { w: "10px", h: true },[{ width: "10px" }, { height: "100vh" }]]
   ]

 test.each(basicData)(
   '%s',
   (_testName: string, props: any, expected: any, theme: any = THEME) => {
     //expect(theme).toEqual( THEME);
     expect(styles(({ theme, ...props }))).toEqual(expected);
   }
 );
  })


 describe("responsive", () => {
  const data:TestTuple=[
    [ 'boolean height ', { h: { medium: true } },[
      { "@media @media (min-width: 40em)": { height: "100vh" } }
    ]],
    [ 'width px', {  w: { medium: "10px" } },[
      { "@media @media (min-width: 40em)": { width: "10px" } }
    ]],
    [ 'w px & bool h', {       w: { medium: "10px" },
    h: { medium: true }, },[
      { "@media @media (min-width: 40em)": { width: "10px" } },
      { "@media @media (min-width: 40em)": { height: "100vh" } }
    ]]
   ]

 test.each(data)(
   '%s',
   (_testName: string, props, expected, theme = THEME) => {
     //expect(theme).toEqual( THEME);
     expect(styles(({ theme, ...props }))).toEqual(expected);
   }
 );
  })



  describe("Misc", () => {
    const data:TestTuple=[
      [ 'Can handle Array of Functions', { size: { medium: "10px" } },[
        { "@media @media (min-width: 40em)": { width: "10px" } },
        { "@media @media (min-width: 40em)": { height: "10px" } }
      ]],
     ]

   test.each(data)(
     '%s',
     (_testName, props, expected, theme = THEME) => {

       expect(styles(({ theme, ...props }))).toEqual(expected);
     }
   );
    })

