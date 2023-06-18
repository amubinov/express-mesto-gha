const { celebrate, Joi } = require('celebrate');
const { urlValidator } = require('./urlValidator');

const vlaidatorCreateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(urlValidator, 'urlValidator'),
  }),
});

const vlaidatorUserMe = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

const vlaidatorUserAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().custom(urlValidator, 'urlValidator').required(),
  }),
});

const vlaidatorUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).required(),
  }),
});

const vlaidatorCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().custom(urlValidator, 'urlValidator').required(),
  }),
});

const vlaidatorCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  vlaidatorCreateUser,
  vlaidatorUserMe,
  vlaidatorUserId,
  vlaidatorCard,
  vlaidatorCardId,
  vlaidatorUserAvatar,
};
