import axios from 'axios';

const API_URL = 'https://reqres.in/api/';

class AuthService { 
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log("laogin" + JSON.stringify(response.data))
        if (response.data) {
          console.log("login" + response.data)
            localStorage.setItem('user', JSON.stringify(response.data));
            let token = localStorage.getItem('user');
            console.log("ENTRO_LOGIN: " + token)
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'regiser', {
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();