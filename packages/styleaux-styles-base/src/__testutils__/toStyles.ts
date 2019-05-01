import { flatten, toArray, mergeAllDeepRight } from "@roseys/futils";

export const toStyles = styles => mergeAllDeepRight([{}, ...flatten(toArray(styles))]);
