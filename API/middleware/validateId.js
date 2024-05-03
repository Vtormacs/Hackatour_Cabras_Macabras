const {isValidObjectId} = require('mongoose');

function validateId(req, res, next) {
    if(!isValidObjectId(req.params.id)) {
        return res.status(404).json({
            success: false,
            message: "Post does not exist."
        })
    }

    next();
}

module.exports = validateId;