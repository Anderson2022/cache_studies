const Task = require('./../schemas/Task')

module.exports = async (req, res) => {

  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task })
  } catch (error) {
    return res.status(201).json({ error })
  }

}