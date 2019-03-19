
import { createStyles } from "../createStyles";
import { rule } from "../rule";


const breakpoints = {
  sm: "(max-width: 600px)"
};
const theme = {
  media: breakpoints,
  breakpoints: {
    sm: "(max-width: 600px)"
  },

  space: {
    all: [0, 8, 16, 32],
    sm: [0, 4, 8, 16]
  },
  size: {
    nudge: {
      all: 2,
      sm: 1
    },
    xl: 100,
    none: 0
  },
  custom: {
    "my-value": "1000vh"
  }
};

test("Works", () => {
  const h = rule("height",  (input:string)=>input)

  const styleConfig = {
    height: h
  };

  const style = createStyles<
    typeof styleConfig,
    typeof theme,
    typeof breakpoints
  >(styleConfig);

  const expected = {
    height: "100%"
  };

  //expect(toStyles(style({ theme, height: 1 }))).toEqual(expected);
  expect(style({ theme, height: "100%" })).toEqual([expected]);

});


