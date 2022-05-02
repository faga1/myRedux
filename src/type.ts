import applyMiddleware from "./applyMiddleware"

export type Reducer = (state:any,action:Action)=>any
export interface Action{
    type:string,
    [propsname:string]:any
}
export type StoreEnhancer = (next:StoreCreator) =>StoreCreator
export type StoreCreator = (reducer:Reducer,enhancer?:StoreEnhancer)=> Store
export interface Store{
    subscribe:(callback:Function)=>void,
    dispatch:Dispatch,
    getState:()=>any
}
type Dispatch = (action:Action)=>void
export type Middleware = (store:Store) => MiddlewareReturn
type MiddlewareReturn = (next:Dispatch) => Dispatch