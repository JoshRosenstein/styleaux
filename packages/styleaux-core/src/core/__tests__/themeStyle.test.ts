import { themeStyle } from "../themeStyle";
import { createStyles } from "../createStyles";

import { flatten, toArray, mergeAllDeepRight } from "@roseys/futils";

const toStyles = styles => mergeAllDeepRight([{}, ...flatten(toArray(styles))]);

const media = {
    D: '(min-width: 601px)',
    M: '(max-width: 600px)'
};
const THEME = {
  media,
  space: {
    all: [0, 10, 20, 30, 60],
    M: [0, 5, 10, 20, 20]
  },
  someComponentStyles: {
    default: {
      backgroundColor: '#000000',
      color: '#ffffff'
    },
    accent: {
      backgroundColor: '#ff0000',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#ffff00'
      }
    },
    caps: {
      textTransform: 'uppercase'
    },
    small: {
      all: {
        height: '30px'
      },
      M: {
        height: '20px'
      }
    }
  }
};
type ITheme=typeof THEME
type IMedia=typeof media
const config={
    is: themeStyle<keyof ITheme['someComponentStyles'] >({ themeKey: 'someComponentStyles' })
  }

const customProps = createStyles<typeof config,ITheme,IMedia>(config)

/// Types Work
//const customPropsT=customProps({theme:THEME,is:'small'})


  const data = [
    ["default", { is: true},THEME.someComponentStyles.default],
    ["other key", { is: 'accent'},THEME.someComponentStyles.accent],
    ["media style", { is: 'small'},{
              ...THEME.someComponentStyles.small.all,
              [`@media ${THEME.media.M}`]: THEME.someComponentStyles.small.M
            }],
    ["media M style", { is: { M: 'small'}},{
              [`@media ${THEME.media.M}`]: THEME.someComponentStyles.small.M
            }],

  ];
  test.each(data)(
    '%s',
    //@ts-ignore
    (testName: string, props: any, expected: any, theme?: any = THEME) => {
      //expect(theme).toEqual( THEME);
      expect(toStyles(customProps({ theme, ...props }))).toEqual(expected);
    }
  );


