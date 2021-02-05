# React Context

Note: The advantage of using context is we can get the value of something no matter the position in the component tree.

When updating the state of your context, the value of that context is passed to all components consuming it.

Best use cases would most likely be usernames, authentication booleans, or things like that.

## Step One: Create a context to share between components

- Create a new file and name it accordingly (UserContext, AuthContext, etc.).
- Within that file, import the createContext hook - { createContext } from React.
- Export a constant with the name/scope of the context and set it to the method CreateContext(), passing in an initial value (if none, set to null).

## Step Two: Wrap the components that you want to grab the state from in a provider

- Import your context hook { yourContext } where your components are instantiated (usually App).
- Wrap the components which need access to the context, as a provider component (<ExampleContext.Provider></ExampleContext.Provider>).
- Pass a value into the provider (<ExampleContext.Provider value='value as a string' or value={{ state, setState }}>).
- Now any of the children components nested within the context provider can receive that value.

## Step Three: Use the context in your components

- In the desired component, import { useContext } from React.
- Import your context hook. (Import { exampleContext } from "../ExampleContext").
- Declare a constant and set it to the useContext() method.
- Pass in the context that you want to get the value for.
- Use the context however you need.

Note: Memoize if the context value changes frequently. May even be a best bractice to just do so, regardless.

const providerForValue = useMemo(() => ({ value, setValue }), [value, setValue]);
