const axios = require('axios');


exports.homeRoutes = (req,res)=>{
    // Make a get request to /api/movie
    axios.get("http://localhost:3000/api/movie")
    .then(function(response){
        res.render("index", {users:response.data});

    })
    .catch(err=>{
        res.send(err);
    })
    
}

exports.add_user = (req,res) => {
    res.render('add_user');
}

exports.update_user = (req,res)=> {
    axios.get('http://localhost:3000/api/movie', { params : { id : req.query.id }})
        .then(function(moviedata){
            res.render("update_user", { movie : moviedata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}