import {
   FetchingGame,
   FetchingGames,
   FetchingCategories,
   FetchingCategory
} from "./actionType"
const baseUrl = 'https://0b63-180-244-162-5.ap.ngrok.io'

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
      fetch(baseUrl + '/pub/games/play/' + id, {
            method: "get",
            headers: {
               'Content-Type': 'application/json',
               'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc1NzU0NDUxfQ.Mt1iCPfTZJU39L4xjYbPOOoOYxu-qfolXU3jHkGk2c4'
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

export const updateLevel = (CategoryId, access_token) => {
   return (dispatch) => {
      fetch(baseUrl + `/pub/games/update/${CategoryId}`, {
         method: 'put',
         headers: {
         'Content-Type': 'application/json',
         access_token
         },
      })
      .then(result => dispatch(getGame(31)))
      .catch(error => console.log(error))
   } 
}