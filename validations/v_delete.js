const { Joi } = require('express-validation')

const v_delete = {
    params: Joi.object({
        id: Joi.number()
            .required()
    }),
}

module.exports = v_delete