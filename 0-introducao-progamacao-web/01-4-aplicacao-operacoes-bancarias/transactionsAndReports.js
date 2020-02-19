const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0,
}

function createTransaction({ type, value }) {
    user.transactions.push({ type, value })

    switch (type) {
        case 'credit':
            user.balance = user.balance + value
            break

        case 'debit':
            user.balance = user.balance - value
            break
    }
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

// console.log(user)

function getHigherTransactionByType(type) {
    let value = 0

    for (let transaction of user.transactions) {
        if (transaction.type === type) {
            if (transaction.value > value) {
                value = transaction.value
            }
        }
    }

    return console.log({ type, value })
}

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    let media = sum / user.transactions.length

    return console.log(media)

}

function getTransactionsCount() {
    let credit = 0
    let debit = 0

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            credit += 1

        } else {
            debit += 1
        }
    }

    return console.log({ credit, debit })


}

getHigherTransactionByType('credit')

getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()