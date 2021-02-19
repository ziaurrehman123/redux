const redux = require('redux')
const createStore =  redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
function buyCake(){
return {  
      type: BUY_CAKE,
    info: 'First Reduc Action'
}
}

function buyIceCream(){
    return {  
          type: BUY_ICECREAM,
        info: 'Second Reduc Action'
    }
    }

// const initialState={
//     numOfCakes:10,
//     numofIceCreams:20
// }

const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    numofIceCreams:20
}

//  const reducer = (state=initialState, action)=>{
//      switch(action.type){
//          case BUY_CAKE:return{
//              ...state,
//              numOfCakes: state.numOfCakes-1
//          }
//          case BUY_CAKE:return{
//             ...state,
//             numofIceCreams: state.numofIceCreams-1
//         }
//          default: return state
//      }

//  }

const cakeReducer = (state=initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}
const icCreamReducer = (state=initialIceCreamState, action)=>{
    switch(action.type){
        case BUY_CAKE:return{
           ...state,
           numofIceCreams: state.numofIceCreams-1
       }
        default: return state
    }

}

const rootReducer=combineReducers({
    cake: cakeReducer,
    iceCream: icCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState())
const unsubscribe =store.subscribe(()=>console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()