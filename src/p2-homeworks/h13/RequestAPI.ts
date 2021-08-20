import axios from "axios";

const instance = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com"
})

export const requestAPI = {
  post(success: boolean) {
    return instance.post("auth/test", {success: success})
      .then(res => {
        console.log(res)
        return res.data.errorText
      })
    .catch(rej => {
      console.log(rej)
      return rej.response.data.errorText
    })
  }
}

// catch (error) { console.log( {...error} ); console.log( error.response
// ? error.response.data.errorText
// : error.message );

