const fetch = require('node-fetch');
const catchAsync = require('../utils/catchAsync');

const url = 'https://exercisedb.p.rapidapi.com/exercises';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const getAllBodyParts = catchAsync((req, res) => {
  const newUrl = url + '/bodyPartList'
  fetch(newUrl, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})

const getExerciseByEquipment = catchAsync((req, res) => {
  const newUrl = url + '/equipment/' + req.params.equipment

  fetch(newUrl, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})
const getAllEquipments = catchAsync((req, res) => {
  const newUrl = url + '/equipmentList'

  fetch(newUrl, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})

const getExercisesByBodyPart = catchAsync((req, res) => {
  const newUrl = url + '/bodyPart/' + req.params.bodyPart
  fetch(newUrl, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
}) 

const getExerciseByMuscle = catchAsync((req, res) => {
  const newUrl = url + '/target/' + req.params.target

  fetch(newUrl, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})
const getAllMuscles = catchAsync((req, res) => {
  const newUrl = url + '/targetList'

  fetch(newUrl, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})
const getExerciseById = catchAsync((req, res) => {
  const newUrl = url +'/'+ req.params.id

  fetch(newUrl, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})
const getAllExercises = catchAsync((req, res) => {
  fetch(url, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})

module.exports = { 
  getAllExercises, 
  getAllBodyParts,
  getAllExercises, 
  getAllMuscles,
  getAllEquipments,
  getExerciseByEquipment,
  getExerciseById,
  getExerciseByMuscle,
  getExercisesByBodyPart,

}