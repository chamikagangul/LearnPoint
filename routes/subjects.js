var express = require('express');
var router = express.Router();
var { authenticate } = require('../middleware/auth')

id = 2
subjectList =[
  {
    id : 1,
    name:"physics",
    topics : [
      "Measurement",
      "Mechanics",
      "Oscillations and Waves",
      "Thermal Physics",
      "Gravitational Field",
      "Electrostatic field",
      "Magnetic Field",
      "Current Electricity",
      "Electronics",
      "Mechanical Properties of Matter",
      "Matter and Radiation"
    ]
  },
  {
    id: 2,
    name : "Mathematics",
    topics :[
      "topic 1",
      "topic 2",
      "topic 3",
      "topic 4",
      "topic 5"
    ]
  }
]

/* subject. */
router.get('/', function(req, res, next) {
  res.send(subjectList);
});

router.post('/', function(req, res, next) {
  subject = req.body;
  id = id+1;
  subject['id'] = id;
  subjectList.push(subject);
  res.send(subjectList);
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  subjectList = subjectList.filter(
    function(value, index, arr){
       return value.id!= id ;
      }
  );
  res.send(subjectList);
});

module.exports = router;
