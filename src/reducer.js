export const reducer =(state,action)=>{
    switch(action.type){
        case "GET-MEALS":
            return {...state,meal:action.payload}
        default:
            return state    
    }
}