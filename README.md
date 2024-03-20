# ReactJS Notes

+ A react component is a function return a html markup with data logic inside it
+ Components name alwasy starts as capital
+ style can be added with adding className property add definging class in a css file or defing inline in style object
+ we can add event hanlder by defining handler methods inside componenent and sending it in event attributes
+ functions starts with use are called hooks, these functions are only called in top level of a component
+ In order to share a state between siblings move up the state to parent and send the setState method to children

## [TicTacToe app link](/TicTacToe/)

## Describing UI
+ React apps made up of small units of components
+ we shall create a file for a specific compoenent and import it wherever needed
+ a component should only return one root html
+ we can use javascript inside html mark by writing it inside curly braces
+ parent can send data to child component by send props
+ condition rendering by `if{}else{}` or by `&&` or `?:` syntax
+ for rendering list add id
+ keep the component pure
+ components can be nested inside components
+ JSX might look like html but it's still a js
+ JSX and React are two independent things, JSX is a syntax-library and react is a javascript library
+ nested components can be accessed within the parent component by props.children property
+ <React.StrictMode> when development if this tag wrapped root all the components are called twice when rendering
+ `useEffect` runs after component rendering
+ a component get data in three ways, props, state, and context

## Adding Interactivity
+ Components can have memory by using state, when we changing state object or array we shouldn't change the value directly instead we need to make a copy and then assign to it
+ for adding event listener to and jsx element create a handle method inside component and pass it
+ Hooks only should be used at the top of the component just like import, should be unconditional
+ A component render will be called on two curcomstances first, it's initial rendering, second either the component's or it's ancesters state has changed
+ In rendering phase it was noted weather the values changed from previous
+ In commit phase the dom is changed which calls repaint from browser
+ calling a state change one by one doestn't change state immediately it'll be added to queue so below doest not change one by one
```javascript
setCount(i+1); // setCount(0 + 1);
setCount(i+1); // setCount(0 + 1);
setCount(i+1); // setCount(0 + 1);
```
+ updater function is instead of value we send function to setmethod this will be added to queue and will run after the event listener's are called
+ if we were working with nested objects we may use **immer** to avoid copying objects ourselves
+ Arrays are same as objects only use methods that does copying, don't edit the current state

## Managing State
+ if two are more states updated simulataniously consider merging them
+ if a value can be computed at run time avoid putting that in a state
+ when two component using a same state move it to the closest parent
+ when a component is removed from ui it's states are remvoed
+ at the same time if there's type component in the same place in ui the state is preserved and served to the other one
+ if we want to prevent react from using the same state for rendering a component in same position give it a key or try to render them with separately
+ by using key react will erase state in that position everytime 
+ when the component have difference actions based on a single state convert it into a reducer
+ reducers must be pure and each action in reducer must be an user interaction
+ context let's a component share a state to child component deep down in tree with passing in props
+ the context value's can be changed by child components and their child will only get the changed value in context

## Escape Hatches
+ use useRef for a piece of information that changes but doest not require rerendering
+ don't read or write ref value when rendering
+ one of the use of ref is to access current Component node to call browser api on them like focus() or scrollIntoView()
+ use forwardRef in order to pass on html element to components parent
+ `flushSync` to update state synchronously
+ `useEffect` just runs after the commit action to the dom, used for network calls mostly or an activity that needs to be done right after rendering
+ useEffect with empty dependency will only run on mounting phase and never after, without any dependency it will run after every rerender, with dependency only when the dependency value chages
+ we can return a cleanup function by returning a callback in useEffect method

## API's
### Core Hooks
+ `use`
    + let's you read a value of a resource like a promise or context
    + when used with context it's works the same as useContext but more flexible can be used inside if, and for loops
    + don't use inside try/catch if used wrap with Errorboundary
+ `useState` for directly updating a state
+ `useReducer` for updating state with reducer function
    + returns a dispatch function which can be called with several action and these actions are handled inside reducer function
+ `useCallback` used for cache function definition
+ `useContext` this hooks allows us to subscribe to any context
+ `useDebugValue` used to label a customHook
+ `useEffect` synchronise with external system called after render and commit part
+ `useId` generate unique id for accessiblity attributes
+ `useImperativeHandle` used to customize the handle of already exposed ref api
+ `useMemo` used to cache a calculation between re-renders
+ `useRef` used to hold a value that does not change between rendering
+ `useState` used to add state variable to the component
+ `useTransition` used to update a state without rerendering

### Core components
+ `<Fragment>` used to group jsx elements
+ `<Profiler>` measure perfonmance of react app
+ `<StrictMode>` for finding bugs on early development, loose usage of js not allowed
+ `<Suspense>` show something until child is finished loading

### API's
+ `createContext` used to create context which later can be provided
+ `forwardRef` allows a parent to access childs node
+ `lazy` defer loading components code until it's first rendered
+ `memo` let's a component skip rerendering if props are not changed
+ `stateTransition` let's update the state without calling rerendering

## React-dom api's
+ `createPortal` render a component in somewhere else in dome
+ `flushSync` dispose all the updates inside the provided callback and render component immediately

## client apis
+ `createRoot` lets render a react node into a dom node
+ `hydrateRoot` displays react component on a browser dom which was preivously occupied by server component

## Rules of react
+ keep component and react pure
+ make them idempotent as much as possible
+ keep hooks as static as possible don't pass them around as normal functions
+ only call hooks at top level
+ 