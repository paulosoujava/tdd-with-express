const express = require('express')
const router = express.Router()
const { validate, ValidationError } = require('express-validation')


router.get('/', (req, res) => {
    res.json({
        code: 200,
        message: "OK",
        users: [
            { name: 'paulo' },
            { name: 'malu' },
            { name: 'bruna' },
        ]
    })
})
router.get('/:id', (req, res) => {
    res.json({
        code: 200,
        message: `Usuario ${req.params.id}`
    })
})

router.post('/create', validate(require('./validations/v_create')), (req, res) => {

    res.json({
        code: 200,
        message: `login: ${req.body.login} senha: "${req.body.senha}`
    })
})
router.put('/update', (req, res) => {
    res.json({
        code: 200,
        message: `login: ${req.body.login} senha"${req.body.senha}`
    })
})
router.delete('/:id', validate(require('./validations/v_delete')), (req, res) => {
    res.json({
        code: 200,
        message: `Usuario ${req.params.id}`
    })
})
router.patch('/update', (req, res) => {
    res.json({
        code: 200,
        message: `login: ${req.body.login} senha"${req.body.senha}`
    })
})

router.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
})


module.exports = router