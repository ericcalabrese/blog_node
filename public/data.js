var blogPosts = [title, body, date];

app.get(/blogPosts, function(req, res){
	var data = {};
	data.something = blogPosts;
	res.render('blogPosts', 
		{title: title}
		{body: body}
		{date: newDate()}
		)
})

// add the variable.title for each value



var eric = [
	{
		title: Jim
		body: Tom
	}
	{
		title: Tick
		body: Dick
	}
]


eric[0].title; = jim

eric[1].body = Dick

post is putting data to browser ( writing blog post)


get you get the data from the server

