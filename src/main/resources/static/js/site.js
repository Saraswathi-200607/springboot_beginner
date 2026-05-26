const users = [
{
    name: "John Doe",
    gender: "Male",
    image: "/img/img_avatar.png"
},
{
    name: "Jane Doe",
    gender: "Female",
    image: "/img/img_avatar2.png"
}
];

let current = 0;

function toggle() {
    current = (current + 1) % users.length;

    const u = users[current];

    document.getElementById("userName").textContent = u.name;

    document.getElementById("userGender").textContent = u.gender;

    document.getElementById("userImage").src = u.image;
}