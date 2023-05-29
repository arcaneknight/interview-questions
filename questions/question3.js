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

const getTotalPosts = () => {
    let totalPosts = 0;
    for (let i = 0; i < users.length; i++) {
        totalPosts += users[i].writtenPosts;
    }
    return totalPosts;
};

console.log(getTotalPosts());