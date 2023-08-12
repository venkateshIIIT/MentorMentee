/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const creatementor = document.querySelector('.form--creatementor');
export const createMentor = async (name,duration,price,priceDiscount,company,description,profession,country,languages,skills,password) => {
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
            password
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
      showAlert('error', 'Error while singing  out! Try again! may be email is duplicate.');
    }
  };
  