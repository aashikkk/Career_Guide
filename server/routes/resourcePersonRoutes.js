const express = require("express");
const router = express.Router();
const resourcePersonController = require("../controllers/resourcePersonController");

router.post("/", resourcePersonController.createResourcePerson);
router.put("/:id", resourcePersonController.updateResourcePerson);
router.delete("/:id", resourcePersonController.deleteResourcePerson);
router.get("/:id", resourcePersonController.getResourcePersonById);
router.get("/", resourcePersonController.getAllResourcePersons);

module.exports = router;
