const elementEmail = document.getElementById('email');
const elementPassword = document.getElementById('password');

const elementName = document.getElementById('name');
const elementConfirmPassword = document.getElementById('confirmPassword');
const elementPhone = document.getElementById('phone');
const elementGender = document.getElementById('male');
const btnSubmit = document.getElementById('submit');

console.log(
  elementEmail,
  elementName,
  elementPassword,
  elementConfirmPassword,
  elementPhone,
  elementGender
);

const callAPISignUp = (e) => {
  e.preventDefault();
  const valueEmail = elementEmail.value;
  const valuePassword = elementPassword.value;
  const valueName = elementName.value;
  const valueConfirmPassword = elementConfirmPassword.value;
  const valuePhone = elementPhone.value;
  const valueGender = elementGender.value;
  const isCheck = elementGender.checked;

  if (
    valueEmail &&
    valueName &&
    valuePassword &&
    valueConfirmPassword &&
    valuePhone &&
    valueGender &&
    isCheck
  ) {
    if (valuePassword === valueConfirmPassword) {
      const updateData = {
        email: valueEmail,
        password: valuePassword,
        name: valueName,
        gender: true,
        phone: valuePhone,
      };
      axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: updateData,
      })
        .then((response) => {
          if (response.status === 200) {
            alert(response.data.message);
            window.location.href = 'http://127.0.0.1:5500/Login/index.html';
          }
        })
        .catch((error) => {
          if (error) {
            console.log('error : ', error);
          }
        });
    } else {
      alert('Vui lòng kiểm tra lại password cho hợp lệ');
    }
  } else {
    alert('vui long nhap du thong tin');
  }
};

btnSubmit.addEventListener('click', callAPISignUp);
