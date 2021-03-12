

const initState = [
    {
        id: 1,
        title: 'Harry potter',
        author: 'John Doe'
    },
    {
        id: 2,
        title: 'Harry potter 2',
        author: 'John Doe'
    },
    {
        id: 3,
        title: 'Harry potter 3',
        author: 'John Doe'
    },
    {
        id: 4,
        title: 'Harry potter 4',
        author: 'John Doe'
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
                    id: state[state.length - 1] ? state[state.length - 1].id + 1 : 1,
                    author: payload.author ? payload.author : 'Anonymous'
                }
            ]
        case 'DELETE_BOOK':
            return [...state].filter(item => item.id !== payload.id)
        default:
            return state
    }

}


export default booksReducer