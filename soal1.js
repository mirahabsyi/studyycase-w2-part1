// Database User Simulation
const userDB = {
  username: "joko",
  password: "rahasia",
  role: "admin",
};

function loginUser(inputUsername, inputPassword, callback) {
  setTimeout(() => {
    if (
      inputUsername === userDB.username &&
      inputPassword === userDB.password
    ) {
      console.log("Login successful");
      callback(userDB);
    } else {
      console.log("Wrong username or password");
    }
  }, 500);
}

function getRole(user, callback) {
  setTimeout(() => {
    if (user.role) {
      const role = user.role;
      callback(role);
    }
  }, 500);
}

function getMenu(role, callback) {
  setTimeout(() => {
    if (role === "admin") {
      const dashboard = "dashboard admin";
      callback(dashboard);
    } else {
      const dashboard = "dashboard";
      callback(dashboard);
    }
  }, 500);
}

loginUser("joko", "rahasia", (user) => {
  getRole(user, (role) => {
    getMenu(role, (menu) => {
      console.log("Menu: ", menu);
    });
  });
});

loginUser("Amira", "rahasia", (user) => {
  getRole(user, (role) => {
    getMenu(role, (menu) => {
      console.log("Menu: ", menu);
    });
  });
});
