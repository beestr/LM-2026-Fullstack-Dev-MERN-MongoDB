const fetchButton = document.getElementById("fetchButton");
const dataContainer = document.getElementById("dataContainer");
const loading = document.getElementById("loading");

// Add event listener
fetchButton.addEventListener("click", fetchUsers);

// Fetch API data
function fetchUsers() {
    loading.textContent = "Loading data...";
    dataContainer.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            loading.textContent = "";

            data.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");

                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                `;

                dataContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            loading.textContent = "Error fetching data!";
            console.log("Error:", error);
        });
}