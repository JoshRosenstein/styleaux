// import { MarginProperty } from '@styleaux/csstype';
// import { assertTrue, Equals } from 'typescript-test-utils';
// import {
//   ResponsiveProp,
//   createStyles,
//   combineStyles,
//   rule,
//   Arg1,
//   DeepRequired,
//   Simplify,
// } from '../';

// export type SpaceType = MarginProperty<number>;

// export type SpaceKeys =
//   | 'margin'
//   | 'marginLeft'
//   | 'marginRight'
//   | 'marginTop'
//   | 'marginBottom'
//   | 'padding'
//   | 'paddingLeft'
//   | 'paddingRight'
//   | 'paddingTop'
//   | 'paddingBottom';

// const spaceRule = (name: SpaceKeys) => rule<SpaceType>(name);

// export const marginRule = spaceRule('margin');

// type Media = { M: string; T: string };

it.todo('Fix');

// it('createStyles with no theme or media', () => {
//   const style = createStyles({
//     margin: (input: string) => ({ margin: input }),
//   });
//   type Result = DeepRequired<Arg1<typeof style>>;
//   type Expected = { margin: string; theme: any };

//   assertTrue<Equals<Result, Expected>>();
// });

// it('createStyles with media', () => {
//   type InputType = string | number;

//   //type PropV = ResponsiveProp<InputType, Media>;

//   const style = createStyles<{ margin: InputType }, never, Media>({
//     margin: (input) => ({ margin: input }),
//   });

//   type Result = Required<Simplify<Arg1<typeof style>>>;
//   type Expected = {
//     margin:
//       | InputType
//       | { M?: InputType; T?: InputType; all?: InputType }
//       | InputType[];
//     theme: Media;
//   };

//   assertTrue<Equals<Result, Expected>>();
// });

// it('Wrapped with combinestyles', () => {
//   type InputType = string | number;

//   const style = createStyles<{ margin: ResponsiveProp<InputType, Media> }>({
//     margin: (input) => ({ margin: input }),
//   });
//   const styleWrapped = combineStyles(style);

//   type Expected = DeepRequired<{
//     margin: ResponsiveProp<InputType, Media>;
//   }>;

//   type Style = typeof style;
//   type StyleWrapped = typeof styleWrapped;

//   type StyleResult = DeepRequired<Arg1<Style>>;

//   type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>;

//   //assertTrue<Equals<StyleResult, Expected>>();
//   //assertTrue<Equals<StyleResult, StyleWrappedResult>>();
// });

// it('Wrapped with combinestyles as rule', () => {
//   const style = createStyles<{
//     margin: ResponsiveProp<string, Media>;
//   }>({
//     margin: rule<string>('margin'),
//   });

//   const styleWrapped = combineStyles(style);

//   // type Expected = DeepRequired<{
//   //   margin: ResponsiveProp<string, Media>;
//   // }>;

//   type Style = typeof style;
//   type StyleWrapped = typeof styleWrapped;

//   type StyleResult = DeepRequired<Arg1<Style>>;

//   type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>;

//   //assertTrue<Equals<StyleResult, Expected>>();
//   assertTrue<Equals<StyleResult, StyleWrappedResult>>();
// });

// it('Debug', () => {
//   // const position = createStyles({ position: rule<string>('position') })
//   // type PositionArg=DeepRequired<Arg1<typeof position>>

//   //const position = createStyles({ position: rule<string>('position') })

//   const style = createStyles<{ position: ResponsiveProp<string> }>({
//     position: rule<string>('position'),
//   });
//   const style2 = createStyles<{ margin: ResponsiveProp<string> }>({
//     margin: rule('margin'),
//   });

//   const styleWrapped = combineStyles(style, style2);

//   type Expected = DeepRequired<{
//     position: ResponsiveProp<string>;
//     margin: ResponsiveProp<string>;
//   }>;

//   type Style = typeof style;
//   type StyleWrapped = typeof styleWrapped;

//   //type StyleWrappedProps=DeepRequired<StyleWrapped['_styleProps']>

//   type StyleResult = DeepRequired<Arg1<Style> & Arg1<typeof style2>>;

//   type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>;

//   //assertTrue<Equals<StyleResult, Expected>>();
//   assertTrue<Equals<StyleResult, StyleWrappedResult>>();
// });
