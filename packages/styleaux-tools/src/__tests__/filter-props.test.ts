import {pickKeys,allowKeys,inList,pluckKeys,disallowKeys} from '../filter-props'

test('inList',()=>{
  const props={a:1,b:2,c:3,d:4}

const isAorBorC=inList('a','b','c')

expect (isAorBorC('a')).toEqual(true)

expect (isAorBorC('d')).toEqual(false)

})

test('allowKeys',()=>{
  const props={a:1,b:2,c:3,d:4}

const isKeyAllowed=allowKeys<typeof props >('a','b','c','d')

expect (isKeyAllowed('a')).toEqual(true)

//@ts-ignore
expect (isKeyAllowed('f')).toEqual(false)

})

test('pickKeys',()=>{
  const props={a:1,b:2,c:3,d:4}

const pickProps=pickKeys<typeof props>('a','c')
const res= pickProps(props)
expect (res).toEqual({a:1,c:3})

})

test('disallowKeys',()=>{
  const props={a:1,b:2,c:3,d:4}

const isKeyAllowed=disallowKeys<typeof props >('a','b','c','d')

expect (isKeyAllowed('a')).toEqual(false)

//@ts-ignore
expect (isKeyAllowed('f')).toEqual(true)

})

test('pluckKeys',()=>{
  const props={a:1,b:2,c:3,d:4}

const pluckProps=pluckKeys<typeof props>('a','c')

const res= pluckProps(props)
expect (res).toEqual({b:2,d:4})

})
