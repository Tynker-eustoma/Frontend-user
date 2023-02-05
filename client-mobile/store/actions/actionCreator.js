const baseUrl = 'https://d731-36-81-152-46.ap.ngrok.io'

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