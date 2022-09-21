const express = require("express");
const router = express.Router();
const Session = require("../models/session");
const catchAsync = require("../utils/catchAsync")

const { isLoggedIn, isAuthor, validateSession } = require('../middleware');

router.get(
    "/",
    catchAsync(async (req, res) => {
        const sessions = await Session.find({});
        res.render("sessions/index", { sessions });
    })
);

router.get("/new", isLoggedIn, (req, res) => {
    res.render("sessions/new");
});

router.post(
    "/",
    isLoggedIn,
    validateSession,
    catchAsync(async (req, res, next) => {
        const session = new Session(req.body.session);
        session.author = req.user;
        await session.save();
        req.flash("success", "Successfully made a new study session!");
        res.redirect(`/sessions/${session._id}`);
    })
);

router.get(
    "/:id",
    catchAsync(async (req, res) => {
        const session = await Session.findById(req.params.id).populate(
            "author"
        );
        if (!session) {
            req.flash("error", "Cannot find that study session!");
            return res.redirect("/sessions");
        }
        res.render("sessions/show", { session });
    })
);

router.get(
    "/:id/edit",
    isLoggedIn,isAuthor,
    catchAsync(async (req, res) => {
        const session = await Session.findById(req.params.id);
        if (!session) {
            req.flash("error", "Cannot find that study session!");
            return res.redirect("/sessions");
        }
        res.render("sessions/edit", { session });
    })
);

router.put(
    "/:id",
    isLoggedIn,isAuthor, 
    validateSession,
    catchAsync(async (req, res) => {
        const { id } = req.params;
        const session = await Session.findByIdAndUpdate(id, {
            ...req.body.session,
        });
        req.flash("success", "Successfully updated study session!");
        res.redirect(`/sessions/${session._id}`);
    })
);

router.delete(
    "/:id",
    isLoggedIn,isAuthor,
    catchAsync(async (req, res) => {
        const { id } = req.params;
        await Session.findByIdAndDelete(id);
        req.flash("success", "Successfully deleted study session!");
        res.redirect("/sessions");
    })
);

module.exports = router;
