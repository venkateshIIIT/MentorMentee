/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const signupForm = document.querySelector('.form--signup');

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const mentorLogin = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/mentorLogin',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign(`/mentordetails/${email}`);
      }, 500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};


export const loginsend = async (subject, compose,mentorid,mentormail) => {
  try {

    const res1 = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/me'
    });
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/sendmail',
      data: {
        subject,
        compose,
        mail:res1.data.data.data.email,
        name:res1.data.data.data.name,
        mentorid,
        mentormail
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'mail successully sent to mentor!');
      console.log(res)
      window.setTimeout(() => {
        location.assign(`/mentor/${mentorid}`);
      }, 2500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};


export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};



export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'signed up in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error',  err.response.data.message);
  }
};

export const createMentor = async (name,duration,price,priceDiscount,company,description,profession,country,languages,skills,email,password,passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/mentors',
      data: {
          name,
          duration,
          price,
          priceDiscount,
          company,
          description,
          profession,
          country,
          languages,
          skills,
          email,
          password,
          passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Your profile has been saved successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error',  err.response.data.message);
  }
};


