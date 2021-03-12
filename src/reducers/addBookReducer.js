

const initState = {
    showForm: false
}

const addBookReducer = (state = initState, action = {}) => {

    const { type, payload } = action

    switch (type) {
        case 'showOrHide':
            {
                let tmp = state
                tmp.showForm = !tmp.showForm
                return tmp
            }
        default:
            return state
    }

}


export default addBookReducer