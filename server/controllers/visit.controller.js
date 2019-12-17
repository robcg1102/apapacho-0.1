const Visit = require('../models/Visit')

exports.createVisit = async (req, res, next) => {
  const {description, date} = req.body;
  const {_id} = req.user


  const visitUser = await Visit.create(
    { description,
      date,
      userID: _id
    },
    req.body._id = '',
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ visitUser })
}

exports.getVisits= async (req, res, next) => {
  const visits = await Visit.find()
  res.status(200).json({ visits })
}