

const initState = {
    showForm: false
}

const addBookReducer = (state = initState, action = {}) => {

    const { type, payload } = action

    switch (type) {
        case 'SHOW_HIDE_FORM':
            {
                let tmp = { ...state }
                tmp.showForm = !state.showForm
                return tmp
            }
        default:
            return state
    }

}


export default addBookReducer