const Joi = require('joi');

module.exports.sessionSchema = Joi.object({
    session: Joi.object({
        title: Joi.string().required(),
        subject: Joi.string().required(),
        maxNumber: Joi.number().required().min(0),
        currNumber: Joi.number(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required()
    }).required()
});