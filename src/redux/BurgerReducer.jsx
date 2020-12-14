const burgerState={
    burger: {salad:1,cheese: 1, beef: 1}, //[{name: "salad", amount: 1}, {name:"cheese", amount: 1},{name: "beef", amount: 1}]
    menu: {salad: 10, cheese: 20, beef: 55},
    total: 85
}

export const BurgerReducer =(state= burgerState,action) => {
    console.log("redux",action);
    switch (action.type) {
        case 'ADD_BREAD_MID':
            let {propsBurger, amount} = action;
            let burgerUpDate = {...state.burger};
            if(amount===-1 && state.burger[propsBurger]<1) {
                return {...state}
            }
            burgerUpDate[propsBurger] +=amount;
            state.burger=burgerUpDate;
            state.total +=amount*state.menu[propsBurger];
            break;
    
        default:
            break;
    }
    return {...state}
}