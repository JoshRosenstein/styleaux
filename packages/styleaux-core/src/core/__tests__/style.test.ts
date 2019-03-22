import { createStyles } from "../createStyles";
import { style } from "../style";

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


const config={
  w: { width: "1px" },
  gap: style<string>({
    getStyle: val => ({ margin: val, padding: val })
  })
}

const styler = createStyles<typeof config,typeof theme,typeof media >(config)

//console.log("styles", t);

test("Works", () => {
  const t = styler({ w: true, gap: { small: '10px' }, theme });

  expect(t).toEqual( [{"width": "1px"}, {"@media @media (min-width: 30em)": {"margin": '10px', "padding": '10px'}}]);

});
