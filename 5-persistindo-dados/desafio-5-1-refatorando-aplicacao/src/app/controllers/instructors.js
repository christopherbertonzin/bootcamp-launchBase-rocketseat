const { age, date } = require('../../lib/utils')


module.exports = {
    index(req, res) {

    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] === "") {
                res.send('Preecha os todos os campos!')
            }
        }    
    },
    edit(req, res) {
    },
    show(req, res) {
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] === "") {
                res.send('Preecha os todos os campos!')
            }
        }  
    },
    delete(req, res) {
    },
}