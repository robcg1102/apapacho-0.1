const Comment = require('../models/Comment')

exports.createComment = async (req, res, next) => {
  const {comment} = req.body;
  const {_id} = req.user

  const commentUser = await Comment.create(
    { comment,
      userID: _id
    },
    req.body._id = '',
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ commentUser })
}

exports.getComments = async (req, res, next) => {
  const comments = await Comment.find().populate('userID')
  res.status(200).json({ comments })
}
