const {
  //getAllPostController,
  createPostController,
  likeAndUnlikePost,
  updatePostController,
  deletePost,
} = require("../controllers/postController");

const router = require("express").Router();
const requireUser = require("../middlewares/requireUser");

// router.get("/all", requireUser, getAllPostController);
router.post("/", requireUser, createPostController);
router.post("/like", requireUser, likeAndUnlikePost )
router.put("/", requireUser, updatePostController)
router.delete("/", requireUser, deletePost)
module.exports = router;
