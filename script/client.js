const endpoint = "http://localhost:8080";

const section = document.querySelector("#user-section");

const getUsers = async (pageNum = 0) => {
  // fetch함수: promise를 반환하는 대표적인 함수
  const response = await fetch(`${endpoint}/api/admin?page=${pageNum}`);
  const result = await response.json();
  const userList = data.users;
  const tags = userList.forEach(
    (user) => `<article>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <span>${user.colors}</span>
      </article>
    `
  );

  section.innerHTML = tags;
};

getUsers(1);
