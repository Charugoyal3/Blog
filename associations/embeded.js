var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST -title,content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var post = mongoose.model("Post", postSchema);

//USER-email,name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "charu@gmail.com",
//     name: "Chiru"
// });
// newUser.posts.push({
//     title: "Everything will be alright",
//     content: "lol Just kidding"
// });

// newUser.save(function(err, user) {
//     if (err) {
//         console.log(user);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new post({
//     title: "Reflection on apples",
//     content: "they are delicious!!"
// });
// newPost.save(function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });
User.findOne({ name: "Chiru" }, function(err, user) {
    if (err) {
        //console.log(err);
    } else {
        user.posts.push({
            title: "3 things i really hate",
            content: "love, love ,love"
        });
        user.save(function(err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});
