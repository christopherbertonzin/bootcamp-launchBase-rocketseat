const users = [
    {
        name: 'Christopher',
        technologies: [
            'JavaScript',
            'HTML',
            'CSS',
        ],
    },
    {
        name: 'Carlos',
        technologies: [
            'React',
            'React-Native',
        ],
    },
    {
        name: 'Jasmine',
        technologies: [
            'NodeJs',
            'Vue',
        ],
    },
]

function listUsers(users) {
    for( i = 0; i < users.length; i++ ) {
        console.log(`${users[i].name} works with ${users[i].technologies}`)
    }
}

listUsers(users)

