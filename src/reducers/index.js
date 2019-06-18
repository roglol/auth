

const init_state = {}

function myapp(state=init_state, action){
    switch(action.type){
        case 'visibility':
            return {
                ...state,
                vaime:'vuishen'
            }
        default:
            return state
    }
}

export default myapp;