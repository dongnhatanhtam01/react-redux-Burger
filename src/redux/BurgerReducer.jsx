const burgerState={
    burger: {salad:3 ,cheese: 2, beef: 1}, //[{name: "salad", amount: 1}, {name:"cheese", amount: 1},{name: "beef", amount: 1}]
    menu: {salad: 10, cheese: 20, beef: 55},
    total: 85
}

export const BurgerReducer =(state= burgerState,action) => {
    console.log("redux",action);
    return {...state}
}