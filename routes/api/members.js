
const members = require('../../Members')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json(members);
  });
  
router.get('/:age', (req, res)=>{
  
    const found = members.some(member => member.age === parseInt( req.params.age))
  
    if(found)
    {
      res.json(members.filter(member => member.age === parseInt( req.params.age)))
    }else{
      res.status(400).json({ali : 'han bhai'})
    } 
  });


  router.post('/',(req,res)=>{

    const newmember={
        "name": req.body.name,
        "age": req.body.age,
        "species": req.body.species,
        "breed": req.body.breed,
    }
    
    members.push(newmember)
    res.json(members)

  })


  router.put('/:age', (req, res)=>{
  
    const found = members.some(member => member.age === parseInt( req.params.age))
  
    if(found)
    {
      members.forEach(member => {
      if(member.age === parseInt(req.params.age))
      {   
        member.name=req.body.name ? req.body.name:member.name
        member.age =req.body.age ? req.body.age:member.age
        res.json(members)
      }  

    })
    }else{
      res.status(400).json({ali : 'han bhai'})
    } 
  });

  module.exports = router