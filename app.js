var express = require('express');
var app = express();

var port = 3000;

var bodyParser = require('body-Parser');
app.use(
	bodyParser.urlencoded({ extended: true})
);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
 
var datetime = new Date();

var blogPosts = [
	// {
	// 	title: "First Post",
	// 	body: "I hope this works!",
	// 	date: "Sun Oct 29 2016"
	// },
	{
		title: "Professional Web Developer",
		body: "After an initial problem with my node js software, I am proud to say I have become a node master. This blog is one of the top ten blogs of all time and I am the smartest man alive. ",
		date: "Sun Nov 12, 2016"
	}
];

app.get('/hello', function(req, res) {
	res.render('blog',{ post: blogPosts })
})

app.get('/create',function(req, res) {
	res.render('create')
})

app.post('/create', function(req, res) {
	var newBlog = {
		title: req.body.title,
		body: req.body.body,
		date: datetime
	}
	blogPosts.push(newBlog)
	res.render('blog', { post: blogPosts })
})


app.listen(port, function() {
	console.log("Listening on 3000");

})