export const initialState={
    cities:[],
    itineraries:[],
    user:null,
    filterCity:[],
    continent:[]

}

export const actionTypes={
    CITIESDB: "CITIESDB",
    ITINERARIESDB:"ITINERARIESDB",
    USER:"USER",
    FILTER: "FILTER",
    CONTINENT:"CONTINENT"

}

const reducer =(state,action)=>{
    //console.log(action)
    //console.log(state)

    switch (action.type) {
        case "CITIESDB":
            return{
                ...state,
                cities:action.cities,
                filterCity:action.cities,
                filterContinent:action.cities
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
                const filterCity= []
                            if( action.value.filterBy === "Filter by Cities" ){
                              filterCity.push(...state.cities.filter(city=>city.city.toLowerCase().startsWith(action.value.value.toLowerCase().trim()))) 
                            } else {
                                filterCity.push(...state.cities.filter(city=>city.country.toLowerCase().startsWith(action.value.value.toLowerCase().trim()))) 
                            }
                                     
                return{
                     ...state,
                     filterCity:filterCity
                }

                case "CONTINENT":
                    const filterContinent = state.cities.filter(city => city.continent.includes(action.value))
                  
                    return{
                        ...state,
                        filterContinent:filterContinent
                    }
    



    
        default:
            return state;
    }
}

export default reducer;