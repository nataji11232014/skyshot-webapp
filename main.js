
console.log("SkyShot WebApp Starter Loaded");
// TODO: Connect to Appwrite SDK here
import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1') // ✅ Your Appwrite endpoint
  .setProject('687911560030f40e7cf0');             // ✅ Your project ID

const account = new Account(client);

async function signUp(email, password, name) {
  try {
    const user = await account.create('unique()', email, password, name);
    document.getElementById('status').textContent = '✅ Signup successful!';
    console.log(user);
  } catch (error) {
    document.getElementById('status').textContent = '⚠️ ' + error.message;
    console.error(error);
  }
}

async function login(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    document.getElementById('status').textContent = '✅ Logged in!';
    console.log(session);
  } catch (error) {
    document.getElementById('status').textContent = '⚠️ ' + error.message;
    console.error(error);
  }
}

window.handleSignup = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signUp(email, password, 'SkyShot User');
};

window.handleLogin = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
};

