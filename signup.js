const firebaseConfig = {
  apiKey: "AIzaSyAs3IB8ZuH0IK-mjU9iIpiWIaFyfdscXAg",
  authDomain: "computerscience-6e601.firebaseapp.com",
  databaseURL: "https://computerscience-6e601-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "computerscience-6e601",
  storageBucket: "computerscience-6e601.appspot.com",
  messagingSenderId: "208934090461",
  appId: "1:208934090461:web:505fd1d783390e73ca4d34",
  measurementId: "G-KXVTYE32XS"
};

const app = firebase.initializeApp(firebaseConfig);

const myDBCxn = firebase.database().ref("/signUp");

// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so post the data to the server
function saveContacts() {
  alert("SUBMIT clicked!!!");

  // read the data from the email field
  const email = document.getElementById("emailIn");
  const emailValue = email.value;
  // reset form
  email.value = ""; // clear the field
  email.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  // read the data from the email field
  const password  = document.getElementById("passwordIn");
  const passwordValue = password.value;
  // reset form
  password.value = ""; // clear the field
  password.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  // read the data from the email field
  const address  = document.getElementById("addressIn");
  const addressValue = address.value;
  // reset form
  address.value = ""; // clear the field
  address.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  // read the data from the email field
  const county = document.getElementById("countyIn");
  const countyValue = county.value;
  // reset form
  county.value = ""; // clear the field
  county.focus(); // set the focus
  // code to save the data to Firebase GOES HERE!
  // read the data from the email field
  


  const data = myDBCxn.push();
  data.set({ email: emailValue, password: passwordValue, address: addressValue, county: countyValue});
}



