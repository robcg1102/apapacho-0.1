const Visit = require('../models/Visit')

exports.createVisit = async (req, res, next) => {
  const visitUser = await Visit.create(
    { ...req.body },
    req.body._id = '',
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ visitUser })
}

exports.getVisits= async (req, res, next) => {
  const visits = await Visit.find()
  res.status(200).json({ visits })
}