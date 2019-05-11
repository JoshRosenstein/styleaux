import {background,backgroundValue} from '../'

test('background',()=>{
  const bg=background({image:'none',color:'lavender'})
const bgv=backgroundValue([{image:'none',color:'lavender'}])

expect(bg).toEqual({background: "none lavender"})
expect(bgv).toEqual("none lavender")
})
