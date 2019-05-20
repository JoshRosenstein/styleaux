export function partition<Props extends {}>(
  by: (value: any, key?: string | number, context?: Props) => any,
) {
  return (props: Props) => {
    const match: Partial<Props> = {};
    const rest: Partial<Props> = {};

    Object.keys(props).forEach((key) => {
      const value = props[key];

      if (by(value, key, props)) {
        match[key] = value;
      } else {
        rest[key] = value;
      }
    });

    return [match, rest];
  };
}
