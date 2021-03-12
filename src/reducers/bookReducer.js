

const initState = [
    {
        id: 1,
        title: 'Harry potter'
    },
    {
        id: 2,
        title: 'Harry potter 2'
    },
    {
        id: 3,
        title: 'Harry potter 3'
    },
    {
        id: 4,
        title: 'Harry potter 4'
    },
]

const booksReducer = (state = initState, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    title: payload.title,
                    id: state[state.length - 1].id + 1
                }
            ]
        default:
            return state
    }

}


export default booksReducer