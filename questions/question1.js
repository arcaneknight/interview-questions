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

const getUserNames = () => {
    const usernames = [];
    for(let i = 0; i < users.length; i++) {
        usernames.push(users[i].name);
    }
    return usernames;
};

console.log(getUserNames())