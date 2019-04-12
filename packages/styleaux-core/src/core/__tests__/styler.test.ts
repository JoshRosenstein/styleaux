import { createStyles } from "../createStyles";
import { styler } from "../styler";
import { ResponsiveProp } from "../types";

type Media = typeof media
const media = {
  small: "@media (min-width: 30em)",
  medium: "@media (min-width: 40em)",
  large: "@media (min-width: 50em)"
};
type Theme = typeof theme

const theme = {
  media,
  space: {
    all: [0, 10, 20, 30, 60],
    M: [0, 5, 10, 20, 20]
  },
  myValue: 100
};



type StyleProps = { w: true, gap: ResponsiveProp<string, Media>, theme: Theme }
const style = createStyles<StyleProps>({
  w: { width: "1px" },
  gap: styler({
    getStyle: val => ({ margin: val, padding: val })
  })
})

//console.log("styles", t);

test("Works", () => {
  const t = style({ w: true, gap: { small: '10px' }, theme });

  expect(t).toEqual([{ "width": "1px" }, { "@media (min-width: 30em)": { "margin": '10px', "padding": '10px' } }]);

});
