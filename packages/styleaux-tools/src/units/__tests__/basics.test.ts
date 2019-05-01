import {px,pt,pc,inch,cm,mm,rem,em,ex,ch,simplePercentage,vw,vh,vmin,vmax,fr,deg,turns,s,ms,hz,kHz,grad,rad} from '../basics'

const basicFuncs={px,pt,pc,'in':inch,cm,mm,rem,em,ex,ch,'%':simplePercentage,vw,vh,vmin,vmax,fr,deg,turn:turns,s,ms,Hz:hz,kHz,grad,rad}

test.each(Object.entries(basicFuncs))("%s", (name, fn) =>{

  expect(fn(1)).toEqual(1+name)


})
