# React Context

## Step One: Create a context to share between components

- Create a new file and name it accordingly (UserContext, AuthContext, etc.).
- Within that file, import { CreateContext } from React.
- Export a constant with the name/scope of the context and set it to the function CreateContext(), passing in an initial value (if none, set to null).

## Step Two: Wrap the components that you want to grab the state from in a provider

- Import context where your components are instantiated (usually App)
- Wrap the components which need access to the context, as a provider component (<ExampleContext.Provider></ExampleContext.Provider>)
- Pass a value into the provider (<ExampleContext.Provider value='string'>)
