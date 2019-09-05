var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("F:/work/Blog/associations/models/post.js");
var User = require("F:/work/Blog/associations/models/user.js");

User.create({
    email: "chiru@gmail.com",
    name: "Chiku"
});

Post.create(
    {
        title: "How to cook part 4",
        content: "Tis is a piece of shit"
    },
    function(err, post) {
        //console.log(post);
        User.findOne({ email: "chiru@gmail.com" }, function(err, foundUser) {
            if (err) {
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
);

//find all user
//find all post for that user

// User.findOne({ email: "chiru@gmail.com" })
//     .populate("posts")
//     .exec(function(err, user) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(user);
//         }
//     });
