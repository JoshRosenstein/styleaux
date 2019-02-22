// import deepmerge from "deepmerge"; // < 1kb payload overhead when lodash/merge is > 3kb.

// function merge(acc, item) {
//   if (!item) {
//     return acc;
//   }

//   return deepmerge(acc, item, {
//     clone: false // No need to clone deep, it's way faster.
//   });
// }

// function omit(input, fields) {
//   const output = {};

//   Object.keys(input).forEach(prop => {
//     if (fields.indexOf(prop) === -1) {
//       output[prop] = input[prop];
//     }
//   });

//   return output;
// }

// export function css(styleFunction) {
//   const newStyleFunction = props => {
//     const output = styleFunction(props);

//     if (props.css) {
//       return {
//         ...merge(output, styleFunction({ theme: props.theme, ...props.css }))
//       };
//     }

//     return output;
//   };

//   newStyleFunction.filterProps = ["css", ...styleFunction.filterProps];

//   return newStyleFunction;
// }
