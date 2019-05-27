const initialState = {
    errorType: null,
    userRepos: [],
    list: {
        0: "none",
        1: "none",
        2: "none",
        3: "none",
        4: "none"
    },
    url: "https://github.com/Mostrowski8/GitHub-API"
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
                let clearRepos = state.userRepos.filter((repo) => {
                    return repo.owner.login !== "error"
                    });
                    
                if (newRepo instanceof Error) {
                    console.log("MATCHED")
                    let newRepo = {id:0, owner:{login: "error"} };
                    return {
                        ...state,
                        errorType: action.payload,
                        userRepos: [...clearRepos, newRepo]
                    }
                }

                let duplicate = clearRepos.find((repo) => {
                    return repo.id === newRepo.id
                });
                if (duplicate) {
                    let newRepos = clearRepos.map((repo) => {
                        if (repo.id === newRepo.id) {
                            return newRepo;
                        }
                        return repo;
                    })
                    return {
                        ...state,
                        userRepos: newRepos,
                        errorType: null
                    }
                }

                return {
                    ...state,
                    userRepos: [...clearRepos, newRepo],
                    errorType: null
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