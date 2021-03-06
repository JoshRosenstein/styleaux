import { rule } from '../rule';
import { createStyles } from '../createStyles';

test('Works', () => {
  const style = createStyles<{ height: string }>({
    height: rule('height', (input) => input),
  });

  const expected = {
    height: '100%',
  };

  //expect(toStyles(style({ theme, height: 1 }))).toEqual(expected);
  expect(style({ height: '100%' })).toEqual([expected]);
});
