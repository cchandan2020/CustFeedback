const express = require('express')

const FeedbackCtrl = require('../controllers/feedback-controller')

const router = express.Router()

router.post('/feedback', FeedbackCtrl.createFeedback)
router.get('/feedback/:id', FeedbackCtrl.getFeedbackById)
router.get('/feedbacks', FeedbackCtrl.getFeedbacks)

module.exports = router