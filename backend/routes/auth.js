const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validations/Validations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



// REGISTERING USER
router.post('/register', async (req, res) => {
    // VALIDATING DATA
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // CHECKING IF USER ALREADY EX ISTS
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');
    // HASHING PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // CREATING USER
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        res.send({
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            date: savedUser.date,
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

// LOGING USER IN
router.post('/login', async (req, res) => {
    // VALIDATING DATA
    const { error } = loginValidation(req.body);
    if (error) return res.send(403,{error: error.details[0].message});
    // CHECKING IF USER EXISTS
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send(403,{error: 'Email is not found'});
    // PASSWORD IS CORRECT OR NOT
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.send(403,{error: 'Email or password is wrong'});
    // IF EVERYTHING IS GOOD
    // CREATING JSONWEBTOKEN
    const token = jwt.sign({
        _id: user._id,
        name: user.name
    }, process.env.SECRET_KEY)

    // res.header('authorization', 'Bearer ' + token);
    res.status(200).send('Bearer:' + token);
});

module.exports = router;