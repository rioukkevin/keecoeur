import Joi from 'joi';

export const twitchCodeSchema = Joi.string().length(28).required().alphanum();
