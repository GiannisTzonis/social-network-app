const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);
router.post("/likePost/:id", postsController.likePost);

// ########################

// router.post("/like/:id", (req, res) => {
//   User.find(
//     {
//       "posts._id": req.params.id,
//     },
//     "posts.$",
//     (err, doc) => {
//       if (err) console.log(err);
//       const alreadyLike = doc[0].posts[0].likes.some(
//         (like) => like._id == req.user.id
//       );

//       if (alreadyLike) {
//         User.update(
//           {
//             "posts._id": req.params.id,
//           },
//           {
//             $inc: { "posts.$.likeCount": -1 },
//             $pull: { "posts.$.likes": { _id: req.user.id } },
//           },
//           (err) => {
//             if (err) console.log(err);
//             res.send("dislike");
//           }
//         );

//         User.findByIdAndUpdate(
//           req.user._id,
//           {
//             $pull: {
//               myLikes: {
//                 _id: req.params.id,
//               },
//             },
//           },
//           (err, user) => {
//             if (err) console.log(err);
//           }
//         );
//       } else {
//         User.update(
//           {
//             "posts._id": req.params.id,
//           },
//           {
//             $inc: { "posts.$.likeCount": 1 },
//             $push: { "posts.$.likes": { _id: req.user.id } },
//           },
//           (err) => {
//             if (err) console.log(err);
//             Legend.find(
//               {
//                 "posts._id": req.params.id,
//               },
//               (err, user) => {
//                 io.to(connectedUsers[user[0]._id]).emit(
//                   "likePost",
//                   req.user.username
//                 );
//                 res.send("like");
//               }
//             );
//           }
//         );

//         User.findByIdAndUpdate(
//           req.user._id,
//           {
//             $push: {
//               myLikes: {
//                 $each: [
//                   {
//                     _id: req.params.id,
//                   },
//                 ],
//                 $position: 0,
//               },
//             },
//           },
//           (err, user) => {
//             if (err) console.log(err);
//           }
//         );
//       }
//     }
//   );
// });

// ########################

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
