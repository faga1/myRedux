import type {Reducer,StoreCreator} from './type'
export default function applyMiddleware(...middlewares){
    function enhancer(createStore:StoreCreator){
        function newCreator(reducer:Reducer){
            const oldStore = createStore(reducer)
            function compose(){
                return middlewares.reduce((pre,cur)=>{
                    const fn = cur(oldStore)
                    // 倒序执行
                    return fn(pre)
                },oldStore.dispatch)
            }
            oldStore.dispatch = compose()
            return oldStore
        }
        return newCreator
    }
    return enhancer
}