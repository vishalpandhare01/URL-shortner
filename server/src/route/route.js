const express = require("express")
const router = express.Router()
const urlController = require("../controller/urlController")


router.post("/url/shorten", urlController.creatUrl)
router.get("/:urlCode",  urlController.getUrl )

router.all("/**", (req, res)=>{
    res.status(400).send({status:false, message:"Please enter valid URL"})
})
module.exports = router