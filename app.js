
const Blog = require('./models/blog')
/* app.get('/add-blog', (req,res)=>{
  const blog = new Blog({
    title: 'New Blog',
    snippet: 'About new blog',
    body: 'More about this new blog'
  });
  blog.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
 })
 app.get('/add-blog', (req,res)=>{
  const blog = new Blog({
    title: 'New Blog 2',
    snippet: 'About new blog',
    body: 'More about this new blog'
  });
  blog.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
 })*/
 
const express = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
// express app
const app = express();
const dbURI = 'mongodb+srv://new-user_msm50:Kable@nodemodules.qavft.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result)=> app.listen(3000))
   .catch((err)=>console.log(err))
// listen for requests
app.listen(3000);
// register view engine 
app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))

/*const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
   {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
   {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];*/
 // app.use((req, res, next) => {
  //  console.log('in the next middleware');
  //   next();
   //});
    
   
 /* app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
  });*/


/*app.get('/', (req, res) => {
    res.render('index', {title:'Home', blogs});
  });


  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });


  });
  app.get('/blogs/create', (req, res) => {
    res.render('create',{ title: 'Create a new blog' } );
  });


  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' } );
  });

  
app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');\
    res.sendFile('./views/about.html', {root: __dirname});
});
app.get('/all-blogs', (req,res)=>{
  Blog.find()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
 })
 app.get('/single-blog',(req,res)=>{
  Blog.findById("5f6a10312845e3679336a1b4")
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log(err)
  })
 })
 

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })
// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
}) */

//routes
//app.get('/', (req, res) => {
//  const blogs = [
  //  {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
 //   {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
 ////   {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//  ];
 // res.render('index', { title: 'Home', blogs });
 //});
  
 app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
 });
 //blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
 });
 //blog routes
app.get('/blogs')
//routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
 });
 //blog routes
app.get('/blogs',(req,res)=>{
  Blog.find().sort({createdAt: -1})
  .then((result)=>{
    res.render('index',{title: "All Blogs", blogs: result})
  })
  .catch((err)=>{
    console.log(err)
  })
 })
  
app.post('/blogs',(req,res)=>{
  console.log(req.body)
 })
 app.post('/blogs',(req,res)=>{
  const blog = new Blog(req.body)
  
  blog.save()
    .then((result)=>{
      res.redirect('/blogs')
    })
    .catch((err)=>{
      console.log(err)
    })
 })
 
 app.get('/blogs/:id',(req,res)=>{
  const id = req.params.id
  Blog.findById(id)
    .then(result=>{
      res.render('details',{ blog: result, title: 'Blog Details' })
    })
    .catch(err=>{
      console.log(err)
    })
 })
 app.delete('/blogs/:id',(req,res)=>{
  const id = req.params.id
  
  Blog.findByIdAndDelete()
 })
 