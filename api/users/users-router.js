const router = require("express").Router();


router.get('/', (req, res) => {
    res.json({message: "Hello, this is working!"})
})

module.exports = router;