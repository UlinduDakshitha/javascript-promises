function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

function fetchProfile() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Admin User",
        role: "Administrator"
      });
    }, 1000);
  });
}

// UI button click
function handleLogin() {
  const msg = document.getElementById("msg");

  login("admin", "1234")
    .then(res => {
      msg.innerText = res;
      return fetchProfile();
    })
    .then(profile => {
      msg.innerText += `\nWelcome ${profile.name}`;
    })
    .catch(err => {
      msg.innerText = err;
    });
}
