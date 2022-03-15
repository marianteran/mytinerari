export const initialState={
    cities:[],
    itineraries:[],
    user:null,
    filterCity:[],

}

export const actionTypes={
    CITIESDB: "CITIESDB",
    ITINERARIESDB:"ITINERARIESDB",
    USER:"USER",
    FILTER: "FILTER",

}

const reducer =(state,action)=>{
    //console.log(action)
    //console.log(state)

    switch (action.type) {
        case "CITIESDB":
            return{
                ...state,
                cities:action.cities,
                filterCity:action.cities
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


            case "FILTER":
                const filterCity= state.cities.filter(city=>city.city.toLowerCase().startsWith(action.value.toLowerCase().trim()))
                 
                return{
                     ...state,
                     filterCity:filterCity
                }
    
        default:
            return state;
    }
}

export default reducer;



/* const filterCity= state.cities?state.cities.filter(city=>city.city.toLowerCase().startsWith(action.value.toLowerCase().trim())):
                                            state.cities.filter(city=>city.continent.toLowerCase().startsWith(action.value.toLowerCase().trim())) */



                                            /* const filterCity= state.cities.filter? (city=>city.city.toLowerCase().startsWith(action.value.toLowerCase().trim())):
                                            (city=>city.continent.toLowerCase().startsWith(action.value.toLowerCase().trim())) */