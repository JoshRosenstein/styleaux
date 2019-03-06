# matchBlock

### a utility function for switchProp but useful enough to be used as a standalone

Deep merges a instuctial styling block in order and will skip keys that do not exist in the pass props.

```jsx




const sizes={sm:1,md:2,lg:3}



const styleObj = {



  basic: {



    color: 'blue',



    fontSize: 2,



  },



  canBeAFunReturnArray: size => [{height: `${sizes.size | size}px`}],



  outerAndInnerFuctions: c => ({



    color: props => path(['theme.colors', c])(props) || c,



  }),



}







const result1=matchBlock(styleObj)({basic:true}) ///=>styleObj.basic







const result2=matchBlock(styleObj)(canReturnArray: 'sm')({height:'1px'}) 







///=>styleObj.basic











```

Or matchBlockArr same thing but in a key value-pair inorder to ensure order of exectution when wanting to insert a slice from a mixin.

```jsx




const sizeMixin =  ['size', s=>{height:s,width:s}],





const styleObj1 =  [

    ['basic', basic],

    ['canReturnArray', canReturnArray],

    ['color', funcOuterAndInner],

  ]





const styleObj=styleObj1

  styleObj1.splice(1, 0, sizeMixin);



```
