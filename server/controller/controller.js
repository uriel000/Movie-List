const { response } = require('express');
var Moviedb = require('../model/model');

// create and save new movie
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: 'Content cannot be empty.'});
        return;
    }
    //new user
    const movie = new Moviedb({
        title:req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        duration: req.body.duration,
        logline: req.body.logline,
        status: req.body.status,
    })

    // save movie in the database
    movie
        .save(movie)
        .then(data=>{
            //redirect the user to the all movie page
            res.redirect('/add-user');
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "Some error occured while creating a create operation"});
        });

}

// retrieve and return all movie/ retrieve and return a single movie
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Moviedb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id "+id});   
            }else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving user with ID: "+id});
        });

    }else{
        Moviedb.find()
        .then(movie => {
            res.send(movie)
        })
        .catch(err=>{
            res.send(500).send({message:err.message || "Error occured while retrieving the movie's information"})
        })
    }


    
}

// Update a new identified movie by movie id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Moviedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update movie with ${id}. Maybe movie not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update move information"})
        })
}


// Delete a movie with specified movie id in the request
exports.delete = (req,res)=> {
    const id = req.params.id;
    Moviedb.findByIdAndDelete(id)
    .then(data=> {
        if(!data){
            res.status(400).send({message:`Cannot Delete movie with ID: ${id}. ID maybe incorrect`});
        }
        else{
            res.send({
                message:"Movie was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:`Cannot delete movie with ID: ${id}`});
    });

}