2 parameters per reducer action:

1. action type
    (what you want to do with the state - e.g. "INCREMENT, DECREMENT, FILTER")
2. payload
    (the input you give to the reducer - e.g. "a filter query, a number to add, a user to add, an id of a user to remove")


-> reducer gets action type + payload
    action type: determines what to do
    payload: gives you data to work with

example:

action{
    type: "INCREMENT",
    payload: 10 
}

-> Reducer determines, increment the number by 10