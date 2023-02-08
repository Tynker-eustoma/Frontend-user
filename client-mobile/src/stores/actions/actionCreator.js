import {
   FetchingGame,
   FetchingGames,
   FetchingCategories,
   FetchingCategory,
   FetchingUser
} from "./actionType"
const baseUrl = 'https://37e5-2001-448a-2077-158d-8c90-f1ff-cea-8422.ap.ngrok.io'

export const login = (data) => {

   return fetch(baseUrl + '/pub/login', {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      .then(response => {
         return response.json()
      })
      .then(result => {
         // console.log(result, 'ini dari creator')
         return result
      })
}


export const register = (data) => {

   return fetch(baseUrl + '/pub/register', {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      .then(response => {
         return response.json()
      })
}

export const fetchGames = (payload) => {
   return {
      type: FetchingGames,
      payload
   }
}

export const fetchCategories = (payload) => {
   console.log(payload)
   return {
      type: FetchingCategories,
      payload
   }
}

export const fetchGame = (payload) => {
   return {
      type: FetchingGame,
      payload
   }
}

export const fetchCategory = (payload) => {
   return {
      type: FetchingCategory,
      payload
   }
}

export const fetchUser = (payload) => {
   return {
      type: FetchingUser,
      payload
   }
}

export const getUser = (access_token) => {
   return (dispatch) => {
      fetch(baseUrl + '/pub/find', {
            method: "get",
            headers: {
               'Content-Type': 'application/json',
               access_token
            },
         })
         .then(resp => {
            return resp.json()
         })
         .then(data => {
            return dispatch(fetchUser(data))
         })
         .catch(error => console.log(error))
   }
}


export const getGames = (CategoryId, access_token) => {
   return (dispatch) => {
      fetch(baseUrl + '/pub/games/' + CategoryId, {
            method: "get",
            headers: {
               'Content-Type': 'application/json',
               access_token
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

export const getCategories = (access_token) => {
   return (dispatch) => {
      fetch(baseUrl + '/pub/categories', {
            method: 'get',
            headers: {
               'Content-Type': 'application/json',
               "access_token": access_token
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

export const getGame = (id, access_token) => {
   return (dispatch) => {
      fetch(baseUrl + '/pub/games/play/' + id, {
            method: "get",
            headers: {
               'Content-Type': 'application/json',
               access_token
            },
         })
         .then(resp => resp.json())
         .then(data => {
            dispatch(fetchGame(data))
         })
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

export const updateLevel = (CategoryId, access_token, lvl) => {
   return (dispatch) => {
      const level = {lvl}
      console.log(level, "action creatorrr")
      return fetch(baseUrl + `/pub/games/update/${CategoryId}`, {
         method: 'put',
         headers: {
         'Content-Type': 'application/json',
         access_token
         },
         body: JSON.stringify(level)
      })
      .catch(error => console.log(error))
   }
}