import { everyMedia } from "../everyMedia";

const media = {
  small: "(min-width: 30em)",
  medium: "(min-width: 40em)",
  large: "(min-width: 50em)"
};

const theme = { media }

test("Works", () => {
  const result1 = everyMedia(
    { theme },
    { small: { height: "1px" } }
  );
  expect(result1).toEqual({
    "@media (min-width: 30em)": { height: "1px" }
  });

});

test("Default All Key", () => {

  const result2 = everyMedia(
    { theme },
    {
      all: { height: "1px" },
      small: { height: "1px" }
    }
  );

  expect(result2).toEqual({
    "@media (min-width: 30em)": { height: "1px" },
    height: "1px"
  });
});


test("Can use a different default Key", () => {
  const SOMEKEY = 'somekey'
  const theme = { media, default: { media: SOMEKEY } }

  const result1 = everyMedia(
    { theme },
    {
      [SOMEKEY]: { height: "1px" },
      small: { height: "1px" }
    }
  );

  expect(result1).toEqual({
    "@media (min-width: 30em)": { height: "1px" },
    height: "1px"
  });

});



test("Doesnt style base with wrong Key and Warns", () => {
  const SOMEWRONGKEY = 'someworngkey'
  const SOMEKEY = 'somekey'
  const theme = { media, default: { media: SOMEKEY } }
  const spyWarn = jest.spyOn(console, 'warn');

  const result1 = everyMedia(
    { theme },
    {
      [SOMEWRONGKEY]: { height: "1px" },
      small: { height: "1px" }
    }
  );

  expect(result1).toEqual({
    "@media (min-width: 30em)": { height: "1px" }
  });

  //@ts-ignore
  expect(spyWarn).toHaveBeenCalledWith('[everyMedia]: Could not Find media for key %s', SOMEWRONGKEY);

  //expect(outputData).toEqual('[everyMedia]:');

});

test.todo("Better way to test a warning was logged")
