import { createStyles } from "../createStyles";
import { combineStyles } from "../combineStyles";

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

const style1=createStyles({ h: { height: "100vh" },})
const style2=createStyles({w: (input: number | string) => ({ width: input })})
const style3=createStyles( {size: [
  (input: number | string) => ({ width: input }),
  (input: number | string) => ({ height: input })
]})




const styles = combineStyles(style1,style2,style3)



const THEME= theme

 describe("basics", () => {
  const basicData=[
    [ 'boolean height', { h: true },[{ height: "100vh" }]],
    [ 'width px', { w: "10px" },[{ width: "10px" }]],
    [ 'w px & bool h', { w: "10px", h: true },[{ width: "10px" }, { height: "100vh" }]]
   ]

 test.each(basicData)(
   '%s',
   (testName: string, props: any, expected: any, theme: any = THEME) => {
     //expect(theme).toEqual( THEME);
     expect(styles(({ theme, ...props }))).toEqual(expected);
   }
 );
  })


 describe("responsive", () => {
  const data=[
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
   (testName: string, props: any, expected: any, theme: any = THEME) => {
     //expect(theme).toEqual( THEME);
     expect(styles(({ theme, ...props }))).toEqual(expected);
   }
 );
  })



  describe("Misc", () => {
    const data=[
      [ 'Can handle Array of Functions', { size: { medium: "10px" } },[
        { "@media @media (min-width: 40em)": { width: "10px" } },
        { "@media @media (min-width: 40em)": { height: "10px" } }
      ]],
     ]

   test.each(data)(
     '%s',
     (testName: string, props: any, expected: any, theme: any = THEME) => {

       expect(styles(({ theme, ...props }))).toEqual(expected);
     }
   );
    })

