const { sessionSchema } = require('./schemas.js');
const ExpressError = require('./utils/ExpressError')
const Session = require('./models/session');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.validateSession = (req, res, next) => {
    const { error } = sessionSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};

module.exports.isAuthor = async(req,res,next) => {
    const {id} = req.params;
    const session = await Session.findById(id)
    if(!session.author.equals(req.user._id)){
        req.flash('error', 'You do not have permission')
        return res.redirect(`/sessions/${id}`);
    }
    next();
}