import type { Reducer } from "./type";
export default function combineReducer(reducers:Record<string,Reducer>):Reducer{
    return function(state={},action){
        let newState = {}
        Object.keys(reducers).forEach(key=>{
            newState[key] = reducers[key](state[key],action)
        })
        return newState
    }
}