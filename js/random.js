
const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById("users-container");
    for (const user of users) {
        console.log(user)
        const userdiv = document.createElement('div');
        userdiv.classList.add('user')
        userdiv.innerHTML = `
        <h3>User Name: ${user.name.title}  ${user.name.first}  ${user.name.last} </h3>
        <p>Email: ${user.email} </p>
        <p>User location: ${user.location.city}</p>
         <p>User location: ${user.location.street.number} ${user.location.street.name}</p>
        <img src="${user.picture.large}">
        `;
        usersContainer.appendChild(userdiv);
    }
}

loadUsers()