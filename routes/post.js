const express = require('express')
const router = express.Router()
const posts = [
	{
		id: 1,
		title: "Introduction to Node.js",
		body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine...",
		author: "John Doe",
		date: "2024-07-01",
	},
	{
		id: 2,
		title: "Getting Started with Express",
		body: "Express is a fast, unopinionated, minimalist web framework for Node.js...",
		author: "Jane Smith",
		date: "2024-07-02",
	},
	{
		id: 3,
		title: "Understanding Asynchronous Programming",
		body: "Asynchronous programming is a form of parallel programming that allows a unit of work to run separately from the primary application thread...",
		author: "Alice Johnson",
		date: "2024-07-03",
	},
	{
		id: 4,
		title: "Mastering RESTful APIs",
		body: "A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data...",
		author: "Bob Brown",
		date: "2024-07-04",
	},
	{
		id: 5,
		title: "Deploying Node.js Applications",
		body: "There are several ways to deploy a Node.js application. Popular methods include using services like Heroku, AWS, and DigitalOcean...",
		author: "Charlie Davis",
		date: "2024-07-05",
	},
];


router.get('/' , (req,res)=>{
   // add limit 
   const limit  = parseInt(req.query.limit)
   
   // not clean
   // if(!isNaN(limit) && limit>0)
   //    res.status(200).json(posts.slice(0,limit))
   // else
   //    res.status(200).json(posts)

   // cleaner
   if (!isNaN(limit) && limit > 0)
		return res.status(200).json(posts.slice(0, limit));
	res.status(200).json(posts);
})


// single product
router.get('/:id' , (req,res)=>{
   // res.status(200).json(posts.filter(post=> post.id === parseInt(req.params.id)))
   const post = posts.find(post=>post.id === parseInt(req.params.id))
   if(!post) return res.status(404).json({message : `There is no post with id ${req.params.id}`})
   res.status(200).json(post)
})

module.exports = router