const initState = {
    users: [],
    post: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            let user = {
                id: action.payload.id,
                name: action.payload.title || action.payload.original_name || action.payload.name,
                img: action.payload.poster_path || action.payload.profile_path,
                date: action.payload.release_date || action.payload.first_air_date || action.payload.birthday
            }
            console.log(user)
            return {
                ...state, users: [...state.users, user]

            }

    }
    return state;
}

export default rootReducer

