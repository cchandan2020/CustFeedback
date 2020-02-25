const Feedback = require('../models/feedback-model')

createFeedback = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a feedback',
        })
    }

    const feedback = new Feedback(body)

    if (!feedback) {
        return res.status(400).json({ success: false, error: err })
    }

    feedback
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: feedback._id,
                message: 'feedback created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'feedback not created!',
            })
        })
}

// router.get('/feedback/:id', FeedbackCtrl.getFeedbackById)

getFeedbackById = async (req, res) => {
    await Feedback.findOne({ _id: req.params.id }, (err, feedback) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!feedback) {
            return res
                .status(404)
                .json({ success: false, error: `Feedback not found` })
        }
        return res.status(200).json({ success: true, data: feedback })
    }).catch(err => console.log(err))
}

getFeedbacks = async (req, res) => {
    await Feedback.find({}, (err, feedbacks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!feedbacks.length) {
            return res
                .status(404)
                .json({ success: false, error: `feedbacks not found` })
        }
        return res.status(200).json({ success: true, data: feedbacks })
    }).catch(err => console.log(err))
}

module.exports = {
    createFeedback,
    getFeedbacks,
    getFeedbackById,
}