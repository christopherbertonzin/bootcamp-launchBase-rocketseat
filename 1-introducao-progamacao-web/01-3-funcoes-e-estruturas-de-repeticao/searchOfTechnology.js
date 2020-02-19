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
            'CSS'
        ],
    },
]

function checkIfUserWorskWithCSS(user) {
    for (let technology of user.technologies) {
        if (technology == 'CSS') {
            return true
        }
    }
}

function sendMessage(users) {
    for (let user of users) {
        if (checkIfUserWorskWithCSS(user)) {
            console.log(`The user ${user.name} works with CSS`)
        }
    }
}

sendMessage(users)