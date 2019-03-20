//https://github.com/Hermanya/color-system/blob/master/src/hooks/useColorSystem.js
import {ChromaStatic,Color} from 'chroma-js'

interface Chroma extends ChromaStatic{
  hcl(h: number, s: number, l: number): Color;
}
const chroma=require('chroma-js') as Chroma

const hueName = (h:number, s:number, l:number) => {
  const i = Math.round(h) % 360;

  if (s < 0.05 || (l < 0.12 && s < 0.18) || l > 0.95) {
    return 'gray';
  }

  if (i < 30) {
    return 'red';
  }

  if (i < 60) {
    return 'orange';
  }

  if (i < 90) {
    return 'yellow';
  }

  if (i < 90) {
    return 'lime';
  }

  if (i < 120) {
    return 'green';
  }

  if (i < 150) {
    return 'green';
  }

  if (i < 180) {
    return 'teal';
  }

  if (i < 210) {
    if (s < 0.2) {
      return 'gray';
    }

    return 'cyan';
  }

  if (i < 260) {
    if (s < 0.2) {
      return 'gray';
    }

    return 'blue';
  }

  if (i < 300) {
    if (s < 0.6) {
      return 'purple';
    }

    return 'indigo';
  }

  if (i < 335) {
    return 'fuschia';
  }

  return 'red';
};


/**
 * Generates a color pallette
 *
 *@link getThemePathOr
 *
  * @param options Generator Options.
  * @param options.hueOffset number between 0-30
  * @param options.invertedLightness enable for automatic Dark Mode
  * @param options.highContrastMode enable for accessibility
  * @param options.highContrastLightnessScale // default [1-10]
  * @param options.lowContrastLightnessScale
  * @param options.hues hues- calculated from hueOffset and scales
 */


export const generatePalette = ({
  hueOffset,
  invertedLightness=false,
  highContrastMode=false,
  highContrastLightnessScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  lowContrastLightnessScale = highContrastLightnessScale.map(
    x => x * 0.8 + 1.5
  ),
  hues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => _ * 30 + hueOffset)
}:{
  hueOffset:number,
  invertedLightness?:boolean,
  highContrastMode?:boolean,
  highContrastLightnessScale?:number[]
  lowContrastLightnessScale?:number[],
  hues?:number[]

}):Partial<Record<ReturnType<typeof hueName>,string[]>> => {
  const lightnessScale = (highContrastMode
    ? highContrastLightnessScale
    : lowContrastLightnessScale
  ).map(_ => _ * 10);

  if (invertedLightness) {
    lightnessScale.reverse();
  }

  return hues.reduce(
    (colors, hue) => {
      colors[hueName(hue, 0.75, 0.5)] = lightnessScale.map(lightness =>
        chroma.hcl(hue, 85 - (20 * lightness) / 100, lightness).hex()
      );
      return colors;
    },
    {
      gray: lightnessScale.map(lightness => chroma.hcl(0, 0, lightness).hex())
    }
  );
};
