import Joi from 'joi';

export const createSchema = Joi.object({
    username: Joi.string().required(),
    name: Joi.string(),
});

export const updateSchema = Joi.object({
    username: Joi.string(),
    name: Joi.string(),
});
