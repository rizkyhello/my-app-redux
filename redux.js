const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }

        default: 
            return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
   console.log('store change:', store.getState());
});

// Dispatching Action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 12});
console.log(store.getState());


// #catatan
// dispatch adalah sebuah action memanggil list2 yang ada di reducer
// Subscription adalah ketika ada action dari reducer, maka subscription terpanggil (seperti lonceng youtobe, updatan youtobe) jika terjadi perubahan dari store

// Step - Step membuat

// 1. Membuat store, (wadah besar untuk menyimpan state2, dan yg bisa merubah dari reducer)
// 2. Membuat function reducer, yg task list (case) yg dilakukan bedasarkan type nya
// 3. Membuat Subscription untuk (fungsi yg akan di panggil, ketika store ada perubahan)
// 4. Membuat Dispatching Action, (Memanggil sebuah action, untuk merubah value)
