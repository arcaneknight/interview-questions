const users = [
    {
        id: 1,
        name: "Ann",
        gender: "Female",
        writtenPosts: 300,
    },
    {
        id: 2,
        name: "Bob",
        gender: "Male",
        writtenPosts: 180,
    }
];

const copiedUsers = users;

copiedUsers.push(
    {
        id: 3,
        name: "Clara",
        gender: "Female",
        writtenPosts: 30,
    }
);

console.log(users);