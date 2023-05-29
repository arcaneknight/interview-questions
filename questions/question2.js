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

const getFemaleUsers = () => {
    const femaleUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].gender === 'Female') {
            femaleUsers.push(users[i]);
        }
    }
    return femaleUsers;
};

console.log(getFemaleUsers());