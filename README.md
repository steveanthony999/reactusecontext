# React Context

Note: The advantage of using context is we can get the value of something no matter the position in the component tree.

## Step One: Create a context to share between components

- Create a new file and name it accordingly (UserContext, AuthContext, etc.).
- Within that file, import { createContext } from React.
- Export a constant with the name/scope of the context and set it to the method CreateContext(), passing in an initial value (if none, set to null).

## Step Two: Wrap the components that you want to grab the state from in a provider

- Import context { destructured } where your components are instantiated (usually App).
- Wrap the components which need access to the context, as a provider component (<ExampleContext.Provider></ExampleContext.Provider>).
- Pass a value into the provider (<ExampleContext.Provider value='value as a string'>).
- Now any of the children components nested within the context provider can receive that value.

## Step Three: Use the context in your components

- In the desired component, import { useContext } from React.
- Import the context { destructured }. (Import { exampleContext } from "../ExampleContext").
- Declare a constant and set it to the useContext() method.
- Pass in the context that you want to get the value for.
- Use the context however you need.
