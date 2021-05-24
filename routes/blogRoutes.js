app.get('/', (req, res) => {
    const blogs = [
     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
   ];
    res.render('index', { title: 'Home', blogs });
   });
 const express = require ('express');
 const router = express.Router();
 router.get('/', (req, res) => {
     res.direct('/blogs');
 });
 router.get('/about', (req, res) => {
    res.render('/about', {title:'About'});
});
  //blog routes
  router.get('/blogs/create', (req,res) => {
      res.render('create', {title: 'Create a new blob'});
  });
   app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
   });
 
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
    module.exports = router;