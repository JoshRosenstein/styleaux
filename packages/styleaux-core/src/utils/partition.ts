export type By<P> = (value: any, key: string | number, context: P) => any;

export function partition<Props extends {}>(by: By<Props>) {
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
