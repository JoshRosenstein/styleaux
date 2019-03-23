[@styleaux/styles-base](../README.md) > ["__testutils__/theme"](../modules/___testutils___theme_.md)

# External module: "__testutils__/theme"

## Index

### Type aliases

* [IMedia](___testutils___theme_.md#imedia)
* [ITheme](___testutils___theme_.md#itheme)

### Variables

* [MQ](___testutils___theme_.md#mq)

### Object literals

* [MEDIA](___testutils___theme_.md#media)
* [THEME](___testutils___theme_.md#theme)

---

## Type aliases

<a id="imedia"></a>

###  IMedia

**Ƭ IMedia**: *`object`*

*Defined in [__testutils__/theme.ts:1](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L1)*

#### Type declaration

___
<a id="itheme"></a>

###  ITheme

**Ƭ ITheme**: *`object`*

*Defined in [__testutils__/theme.ts:15](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L15)*

#### Type declaration

___

## Variables

<a id="mq"></a>

### `<Const>` MQ

**● MQ**: *`object`* =  Object.keys(MEDIA).reduce((acc, k) => {
  acc[k] = '@media ' + MEDIA[k]
  return acc
}, {}) as IMedia

*Defined in [__testutils__/theme.ts:10](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L10)*

#### Type declaration

___

## Object literals

<a id="media"></a>

### `<Const>` MEDIA

**MEDIA**: *`object`*

*Defined in [__testutils__/theme.ts:3](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L3)*

<a id="media.c"></a>

####  C

**● C**: *`string`* = "(max-width: 666px)"

*Defined in [__testutils__/theme.ts:7](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L7)*

___
<a id="media.d"></a>

####  D

**● D**: *`string`* = "(min-width: 1025px)"

*Defined in [__testutils__/theme.ts:4](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L4)*

___
<a id="media.m"></a>

####  M

**● M**: *`string`* = "(max-width: 600px)"

*Defined in [__testutils__/theme.ts:6](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L6)*

___
<a id="media.t"></a>

####  T

**● T**: *`string`* = "(min-width: 601px) and (max-width: 1024px)"

*Defined in [__testutils__/theme.ts:5](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L5)*

___

___
<a id="theme"></a>

### `<Const>` THEME

**THEME**: *`object`*

*Defined in [__testutils__/theme.ts:17](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L17)*

<a id="theme.media-1"></a>

####  media

**● media**: *`object`* =  MEDIA

*Defined in [__testutils__/theme.ts:18](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L18)*

#### Type declaration

___
<a id="theme.size"></a>

####  size

**size**: *`object`*

*Defined in [__testutils__/theme.ts:24](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L24)*

<a id="theme.size.lg"></a>

####  lg

**● lg**: *`number`* = 32

*Defined in [__testutils__/theme.ts:35](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L35)*

___
<a id="theme.size.md"></a>

####  md

**● md**: *`number`* = 16

*Defined in [__testutils__/theme.ts:34](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L34)*

___
<a id="theme.size.none"></a>

####  none

**● none**: *`number`* = 0

*Defined in [__testutils__/theme.ts:30](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L30)*

___
<a id="theme.size.sm"></a>

####  sm

**● sm**: *`number`* = 8

*Defined in [__testutils__/theme.ts:33](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L33)*

___
<a id="theme.size.xl"></a>

####  xl

**● xl**: *`number`* = 100

*Defined in [__testutils__/theme.ts:29](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L29)*

___
<a id="theme.size.xs"></a>

####  xs

**● xs**: *`number`* = 4

*Defined in [__testutils__/theme.ts:32](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L32)*

___
<a id="theme.size.xxl"></a>

####  xxl

**● xxl**: *`number`* = 128

*Defined in [__testutils__/theme.ts:36](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L36)*

___
<a id="theme.size.xxs"></a>

####  xxs

**● xxs**: *`number`* = 2

*Defined in [__testutils__/theme.ts:31](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L31)*

___
<a id="theme.size.nudge"></a>

####  nudge

**nudge**: *`object`*

*Defined in [__testutils__/theme.ts:25](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L25)*

<a id="theme.size.nudge.m-1"></a>

####  M

**● M**: *`number`* = 1

*Defined in [__testutils__/theme.ts:27](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L27)*

___
<a id="theme.size.nudge.all"></a>

####  all

**● all**: *`number`* = 2

*Defined in [__testutils__/theme.ts:26](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L26)*

___

___

___
<a id="theme.space"></a>

####  space

**space**: *`object`*

*Defined in [__testutils__/theme.ts:19](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L19)*

<a id="theme.space.m-2"></a>

####  M

**● M**: *(`string` \| `number`)[]* =  [0, 5, 10, '2rem', 20]

*Defined in [__testutils__/theme.ts:21](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L21)*

___
<a id="theme.space.all-1"></a>

####  all

**● all**: *(`string` \| `number`)[]* =  [0, 10, 20, '3rem', 60]

*Defined in [__testutils__/theme.ts:20](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L20)*

___
<a id="theme.space.c-1"></a>

####  C

**C**: *`object`*

*Defined in [__testutils__/theme.ts:22](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L22)*

<a id="theme.space.c-1.sm-1"></a>

####  sm

**● sm**: *`number`* = 1

*Defined in [__testutils__/theme.ts:22](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/__testutils__/theme.ts#L22)*

___

___

___

___

