const users = [
  {
    name: "Caio Almeida",
    username: "caio.almeida@gmail.com",
    password: "abc123",
  },
  {
    name: "Romulo Franca",
    username: "romulo.franca@gmail.com",
    password: "abc123",
  },
  {
    name: "Vanessa Silva",
    username: "vanessa.@gmail.com",
    password: "abc123",
  },
];

function login() {
  let inputs = document.getElementById("login").elements;
  let username = inputs["username"].value;
  let password = inputs["password"].value;

  users.map(user => {
    if(user.username === username) {
      if(user.password === password) {
        window.location.replace("/assets/home.html")
      }
    }
  })
}
