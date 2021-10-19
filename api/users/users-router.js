const router = require("express").Router();


router.get('/', (req, res) => {
    res.json(<h1> Hello, this is working! </h1>)
})

module.exports = router;