import { Reducer,Action,StoreEnhancer, Store } from "./type";

export default function createStore(reducer:Reducer,enhancer?:StoreEnhancer):Store{
    let state;
    let listeners = []
    if(enhancer){
        const newCreateStore = enhancer(createStore)
        return newCreateStore(reducer)
    }
    function subscribe(callback:Function){
        listeners.push(callback)
    }
    function dispatch(action:Action){
        state = reducer(state,action)
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    function getState(){
        return state;
    }
    return {subscribe,dispatch,getState}
}