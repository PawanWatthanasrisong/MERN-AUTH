const express = require('express');
const router = express.Router();
const cors = require('cors');
const {registerUser, loginUser, getProfile} = require('../controllers/authControllers.js');

//middlware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', (req,res,next) => {
    res.json(`test is working`);
})

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/profile', getProfile);


module.exports = router;