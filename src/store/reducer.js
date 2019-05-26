const initialState = {
    userRepos: [],
    list: {
        0: "none",
        1: "none",
        2: "none",
        3: "none",
        4: "none"
    },
    url: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE":

            return {
                ...state,
                url: action.payload
            }
            case "ADD":
                let newRepo = action.payload;

                let duplicate = state.userRepos.find((repo) => {
                    return repo.id === newRepo.id
                });
                if (duplicate) {
                    let newRepos = state.userRepos.map((repo) => {
                        if (repo.id === newRepo.id) {
                            return newRepo;
                        }
                        return repo;
                    })
                    return {
                        ...state,
                        userRepos: newRepos
                    }
                }

                return {
                    ...state,
                    userRepos: [...state.userRepos, newRepo]
                }
                case "SELECT_LIST":
                    return {
                        ...state,
                        list: {...state.list, [action.payload.index]:action.payload.value}
                    }
                    default:
                        return {
                            ...state
                        }
    }

}

export default reducer;