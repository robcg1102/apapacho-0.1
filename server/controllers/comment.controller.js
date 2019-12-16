const Comment = require('../models/Comment')

exports.createComment = async (req, res, next) => {
  const commentUser = await Comment.create(
    { ...req.body },
    req.body._id = '',
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ commentUser })
}

exports.getComments = async (req, res, next) => {
  const comments = await Comment.find()
  res.status(200).json({ comments })
}