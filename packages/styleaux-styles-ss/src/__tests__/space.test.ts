import {space,defaultSpaceScale} from '../'
import { toStyles} from "../__testUtils__";

const MEDIA = {
  D: '(min-width: 1025px)',
  T: '(min-width: 601px) and (max-width: 1024px)',
  M: '(max-width: 600px)',
  C: '(max-width: 666px)',
}
type Imedia=typeof MEDIA

const MQ= (Object.keys(MEDIA).reduce((acc,k)=>{acc[k]='@media ' + MEDIA[k]
return acc
},{} as Imedia))

const spaceT=  {
none: 0,
xxs: 2,
xs: 4,
sm: 8,
md: 16,
lg: 32,
xl: 100,
xxl: 128,}

const theme = {
  media: MEDIA,
  space: spaceT

}

const THEME = theme;
type Options = {
  theme?: any;
};

type V = {
  values: string[];
  falseValue?: string;
  trueValue?: string;
};

const data = [
  [
    'Uses Theme',
    { m: 'xs' },
    {
      margin: '4px',
    }
  ],
  [
    'Responsive',
    { m: {all:1,T:2} },
    {
      margin: defaultSpaceScale[1]+'px', [MQ.T]:{margin:defaultSpaceScale[2]+'px'}
    }
  ],

  [
    'Responsive themekey lookup',
    { m: {all:'xs',T:'md'} },
    {
      margin: '4px', [MQ.T]:{margin:'16px'}
    }
  ],

  [
    'Shorthands overide longs',
    { mx: 'xs', ml:'lg' },
    {
      marginLeft: '32px',  marginRight: '4px',
    }
  ],

];

//@ts-ignore
test.each(data)(
  '%s',
  //@ts-ignore
  (testName: string, props: any, expected: any, theme?: any = THEME) => {
    //expect(theme).toEqual( THEME);
    expect(toStyles(space({ theme, ...props }))).toEqual(expected);
  }
);
