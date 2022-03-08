export const initialState={
    cities:[],
    itineraries:[],
    user:null,

}

export const actionTypes={
    CITIESDB: "CITIESDB",
    ITINERARIESDB:"ITINERARIESDB",
    USER:"USER"

}

const reducer =(state,action)=>{
    console.log(action)
    console.log(state)

    switch (action.type) {
        case "CITIESDB":
            return{
                ...state,
                cities:action.cities
            }

            case "ITINERARIESDB":
                return{
                    ...state,
                    itineraries:action.itineraries
                }
       
            case "USER":
                return{
                    ...state,
                    user:action.user
                }
    
        default:
            return state;
    }
}

export default reducer;