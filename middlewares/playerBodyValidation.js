const Joi = require('joi')

const playerBodyValidation = async (req, res, next) => {
  const body = req.body
  try {
    const result = Joi.object({
      team: Joi.string().required(),
      description: Joi.string().required().min(3).max(200),
      name: Joi.string().required(),
      gender: Joi.string().required().valid("Male", "Female", "Others"),
      sports: Joi.array().required(),
      date_of_birth: Joi.date().required(),
      location: Joi.string().required()
    })

    const validation = result.validate(body)

    if (validation.error) {
      res.status(401).json({ status: "fail", message: validation.error.details })
    } else {
      next()
    }
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message })
  }
}
module.exports = playerBodyValidation