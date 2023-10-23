const elementEmail = document.getElementById('email');
const elementPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');

const setLocalStorage = (data) => {
  console.log('data : ', data);
  localStorage.setItem('token', JSON.stringify(data));
};

const callAPILogin = (e) => {
  e.preventDefault();
  const valueEmail = elementEmail.value;
  const valuePassword = elementPassword.value;
  const dataUpdate = {
    email: valueEmail,
    password: valuePassword,
  };
  axios({
    method: 'post',
    url: 'https://shop.cyberlearn.vn/api/Users/signin',
    data: dataUpdate,
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('response : ', response);
        const token = response.data.content.accessToken;
        alert(response.data.message);
        setLocalStorage(token);
        window.location.href = 'http://127.0.0.1:5500/HomePage/homePage.html';
      }
    })
    .catch((error) => {
      if (error) {
        alert(error.response.data.message);
      }
    });
};

btnLogin.addEventListener('click', callAPILogin);
