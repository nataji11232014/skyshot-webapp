const client = new Appwrite.Client();

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1') // ✅ Your endpoint
  .setProject('687911560030f40e7cf0'); // ✅ Your project ID

const account = new Appwrite.Account(client);

function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  account.create('unique()', email, password)
    .then(() => {
      document.getElementById('status').innerText = '✅ Signup successful!';
    })
    .catch(error => {
      document.getElementById('status').innerText = '❌ ' + error.message;
    });
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  account.createEmailSession(email, password)
    .then(() => {
      document.getElementById('status').innerText = '✅ Login successful!';
    })
    .catch(error => {
      document.getElementById('status').innerText = '❌ ' + error.message;
    });
}
