const express = require('express');
const path = require('path');


const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) =>{
    res.render(path.join(__dirname, 'views','index.ejs'),{title:'Home',page_name:'home'});
});

app.use('/signup',(req,res) =>{
    res.render(path.join(__dirname, 'views','signup.ejs'),{title:'SignUp',page_name:'signup'});
});

app.use('/login',(req,res) =>{
    res.render(path.join(__dirname, 'views','login.ejs'),{title:'Login',page_name:'login'});
});

app.get('/about',(req,res) =>{
    res.render(path.join(__dirname, 'views','about.ejs'),{title:'About',page_name:'about'});
});
app.get('/blog',(req,res) =>{
    res.render(path.join(__dirname, 'views','blog.ejs'),{title:'Blog',page_name:'blog'});
});

app.get('/industry',(req,res) =>{
    res.render(path.join(__dirname, 'views','industry.ejs'),{title:'Industry',page_name:'industry'});
});

app.get('/products',(req,res) =>{
    res.render(path.join(__dirname, 'views','products.ejs'),{title:'Products',page_name:'products'});
});


app.get('/resources',(req,res) =>{
    res.render(path.join(__dirname, 'views','resources.ejs'),{title:'Resources',page_name:'resources',active:'is-active'});
});

app.use((req,res) =>{
    res.status(404).render(path.join(__dirname, 'views','404.ejs'),{title:'404',page_name:'404'});
});


app.listen(3000);