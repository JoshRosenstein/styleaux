import { pathObj } from '@roseys/futils';;
import { getDefaultMedia } from './getDefaultMedia';

import { getTheme } from './getTheme'

import { MEDIA_KEY } from '../constants';



export const getThemeMedia = <T extends {theme?:any}>(props:T) => {

  return Object.assign(

  ({[ getDefaultMedia(props) ]: null}) as {[MEDIA_KEY]:null},

    {...pathObj(getTheme(props) ,[MEDIA_KEY])})
  }


//const t2=getThemeMedia({theme:{media:{m:1},default:{media:MEDIA_KEY}}})


