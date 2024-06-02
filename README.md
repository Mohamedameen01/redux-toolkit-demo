# **Redux-Toolkit Demo**

### **1-** Create a folder is named 'redux' in src.
### **2-** And a file 'cartSlice.js' anyname you working on it.
```
+ import createSlice.
+ declare a variable named 'INITIAL_STATE'.
+ assign the function 'createSlice' to 'cartSlice' variable.
+ export actions and reducer.
```
### **3-** Also a file named 'store' in redux.
```
+ import configureStore.
+ assign 'configureStore' function to 'store' variable and export it.
```
### **4-** In 'main.jsx' or 'index.jsx' file.
```
+ import 'Provider' from react-redux.
+ import 'store'.
+ wrap 'Provider' component on 'App' component.
+ and pass 'store' thru 'Provider' component.
```
### **5-** CreateAsyncThunk
```
+ for asynchoronous actions.
+ it accepts three parameters.
    1- a redux action type string like 'name/function'.
    2- a callback function that returns a promise.
    3- options object.
```

### **6-** Promise Lifecycle Actions.
```
+ we use for this builder callback
eg: 
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.(pending, fullfilled or rejected), (state,action) => {})
    }

