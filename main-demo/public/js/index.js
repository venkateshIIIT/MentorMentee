/* eslint-disable */
import '@babel/polyfill';
import { login, logout ,signup,createMentor,loginsend, mentorLogin } from './login';
import { updateSettings,updateSettings1 } from './updateSettings';
import { bookTour } from './stripe';
import { showAlert } from './alerts';

// DOM ELEMENTS
const creatementorForm = document.querySelector('.form--creatementor');
const signupForm = document.querySelector('.form--signup');
const mentorloginForm = document.querySelector('.form--mentorlogin');
const loginForm = document.querySelector('.form--login');
const loginFormsend = document.querySelector('.form--loginsend');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');
const userDataForm1 = document.querySelector('.form-user-data1');
const userPasswordForm1 = document.querySelector('.form-user-password1');






if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    signup(name, email, password, passwordConfirm);
  });
}

if (creatementorForm) {
  creatementorForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;
    const priceDiscount = document.getElementById('discount').value;
    const company = document.getElementById('company').value;
    const description = document.getElementById('description').value;
    const profession= document.getElementById('profession').value;
    const country = document.getElementById('country').value;
    const languages = document.getElementById('languages').value;
    const skills = document.getElementById('skills').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('confirmpassword').value;
    createMentor(name,duration,price,priceDiscount,company,description,
      profession,country,languages,skills,email,password,passwordConfirm);
  });
}
if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('loginForm',email,password);
    login(email, password);
  });

if(mentorloginForm)
  mentorloginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('mentorloginForm',email,password)
    mentorLogin(email, password);
  });

  if (loginFormsend)
  loginFormsend.addEventListener('submit', e => {
    e.preventDefault();
    const subject = document.getElementById('subject').value;
    const compose = document.getElementById('compose').value;
    const mentorid = document.getElementById('mentorid').value;
    const mentormail = document.getElementById('mentormail').value;
    loginsend(subject,compose,mentorid,mentormail);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm1)
  userDataForm1.addEventListener('submit', e => {
    e.preventDefault();
    console.log('userDataForm11111');
    const name= document.getElementById('name').value;
    const company= document.getElementById('company').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const availability = document.querySelector('input[name="availability"]:checked').value;
    const form={
      name,
      company,
      description,
      price,
      availability
    }
    updateSettings1(form, 'data');
  });

  if (userDataForm)
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings({ passwordCurrent, password, passwordConfirm }, 'password');

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

  if (userPasswordForm1)
  userPasswordForm1.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    console.log('userPasswordForm1');
    await updateSettings1({ passwordCurrent, password, passwordConfirm }, 'password');

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

if (bookBtn)
  bookBtn.addEventListener('click', e => {
    e.target.textContent = 'Processing...';
    const { mentorId } = e.target.dataset;
    bookTour(mentorId);
  });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);
