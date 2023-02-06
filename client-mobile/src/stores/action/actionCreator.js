import { FetchingGame, FetchingGames, FetchingCategories, FetchingCategory } from "./actionType"
// const baseUrl = 'http://localhost:3001'
// const baseUrl = 'https://7158-36-65-164-64.ap.ngrok.io'
const baseUrl = ' https://73de-180-244-164-241.ap.ngrok.io'
export const fetchGames = (payload) => {
    return { type: FetchingGames, payload }
}

export const fetchCategories = (payload) => {
    console.log(payload)
    return { type: FetchingCategories, payload }
}

export const fetchGame = (payload) => {
    return { type: FetchingGame, payload }
}

export const fetchCategory = (payload) => {
    return { type: FetchingCategory, payload }
}

export const getGames = () => {
    return (dispatch) => {
        fetch(baseUrl + '/counting', {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                return dispatch(fetchGames(data))
            })
            .catch(error => console.log(error))
    }
}

export const getCategories = () => {
    return (dispatch) => {
        fetch(baseUrl + '/categories', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                return dispatch(fetchCategories(data))
            })
            .catch(error => console.log(error))
    }
}

export const getGame = (id) => {
    return (dispatch) => {
        fetch(baseUrl + '/games/play/' + id, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchGames(data)))
            .catch(error => console.log(error))
    }
}

export const getGamesByCategory = (categoryId) => {
    return (dispatch) => {
        fetch(baseUrl + `/games/${categoryId}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchCategory(data)))
            .catch(error => console.log(error))
    }
}

export const login = (formLogin) => {
    return (dispatch) => {
        return fetch(baseUrl + '/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formLogin)
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    return resp.json().then((error) => {
                        throw new Error(error.message);
                    })
                }
            })
            .then(data => {
                localStorage.setItem("access_token", data.access_token)
            })
    }
}

export const register = (formRegister) => {
    return (dispatch) => {
        return fetch(baseUrl + '/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formRegister)
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                return resp.json().then((error) => {
                    throw new Error(error.message);
                })
            }
        })
    }
}