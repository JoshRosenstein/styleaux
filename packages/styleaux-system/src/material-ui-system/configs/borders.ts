function getBorder(value) {
  if (typeof value !== "number") {
    return value;
  }

  return `${value}px solid${value === 0 ? " !important" : ""}`;
}

// borders

export const borderConfig = {
  cssProp: "border",
  path: "borders",
  postFn: getBorder
};

export const borderTopConfig = {
  cssProp: "borderTop",
  path: "borders",
  postFn: getBorder
};
export const borderRightConfig = {
  cssProp: "borderRight",
  path: "borders",
  postFn: getBorder
};
export const borderBottomConfig = {
  cssProp: "borderBottom",
  path: "borders",
  postFn: getBorder
};
export const borderLeftConfig = {
  cssProp: "borderLeft",
  path: "borders",
  postFn: getBorder
};

export const borderColorConfig = {
  prop: "borderColor",
  path: "palette",
  postFn: value => `${value} !important`
};

export const borderRadiusConfig = {
  prop: "borderRadius",
  path: "shape"
};

export const bordersConfig = [
  borderConfig,
  borderTopConfig,
  borderRightConfig,
  borderBottomConfig,
  borderLeftConfig,
  borderColorConfig,
  borderRadiusConfig
];
