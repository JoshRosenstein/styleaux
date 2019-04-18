/**
 * Gradient helper functions
 */

import { commaSeparatedList, spaceSeparatedList } from "../helpers";


  export interface GradientStep {
    position: string;
    color: string;
  }
  export const gradientStep = (color: string, position: string): GradientStep => ({ position, color });

  export interface GradientLinearProps {
    direction: string;
    steps: GradientStep[];
  }

  const linearHelper = (gradientName: string) =>
    ((...args: any[]) => {
      let direction: GradientLinearProps["direction"];
      let steps: GradientLinearProps["steps"];

      if (args.length === 1) {
        if (typeof args[0] === "string") {
          console.log('Here',{direction:args[0]})
          direction = args[0];
          steps = [];
        } else {
          direction = args[0].direction;
          steps = args[0].steps;
        }
      } else {
        direction = args[0];
        steps = args.slice(1);
      }

      return `${gradientName}(${commaSeparatedList(
        direction,
        ...steps.map(({ position, color }) => spaceSeparatedList(color, position)),
      )})`;
    }) as {
      (props: GradientLinearProps): string;
      (direction: GradientLinearProps["direction"], ...steps: GradientLinearProps["steps"]): string;
    };

  export const linear = linearHelper("linear-gradient");
  export const linearRepeating = linearHelper("repeating-linear-gradient");

  export interface GradientRadialProps {
    steps: GradientStep[];
  }

  const GradientradialHelper = (gradientName: string) =>
    ((...args: any[]) => {
      const steps: GradientStep[] = args.length === 1 && typeof args[0].steps !== "undefined" ? args[0].steps : args;

      return `${gradientName}(${commaSeparatedList(
        ...steps.map(({ position, color }) => spaceSeparatedList(color, position)),
      )})`;
    }) as {
      (props: GradientRadialProps): string;
      (...steps: GradientRadialProps["steps"]): string;
    };

  export const radial = GradientradialHelper("radial-gradient");
  export const repeatingRadial = GradientradialHelper("repeating-radial-gradient");


