let log = console.log;
let userside = document.querySelector(".user-side");
window.onload = function () {
  showuser();
  getposts(1);
};
// log("eloo")
function showuser() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      for (let user of users) {
        //with every loop it get a new number
        //will pass the number to the userclicked functoin
        //after the function will be ready to call from html page
        //with 2 pramter first refrence to the id of the user
        //secend pramter refrence to the clicked windo
        document.querySelector(".user-side").innerHTML += `
        <div class="user-windo" onclick = userclicked(${user.id},this)>
  <div class="name">${user.name}</div>
  <div class="email">${user.email}</div>
</div>`;
      }
    }
  };
}

function getposts(id) {
  document.querySelector(".posts-side").innerHTML = " ";
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );

  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      for (let post of posts) {
        document.querySelector(".posts-side").innerHTML += `
        <div class="posts-windo">
        <div class="title">${post.title}</div>
        <hr />
        <div class="body">
        ${post.body}
          </div>
          </div>

        `;
      }
    }
  };
}
function userclicked(id, ele) {
  getposts(id);
  let userwindo = document.querySelectorAll(".user-windo");
  userwindo.forEach((windo) => {
    windo.classList.remove("active");
  });

  ele.classList.add("active");
}
