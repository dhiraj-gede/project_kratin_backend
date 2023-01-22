const router = require('express').Router();
const { getAllExercises,
    getAllBodyParts,
    getAllMuscles,
    getAllEquipments,
    getExerciseByEquipment,
    getExerciseById,
    getExerciseByMuscle,
    getExercisesByBodyPart, } = require('../../controllers/exercise.controller')
const auth = require('../../middlewares/auth');


router.get('/', auth, getAllExercises);
router.get('/bodyPartList', auth, getAllBodyParts);
router.get('/targetList', auth, getAllMuscles);
router.get('/equipmentList', auth, getAllEquipments);
router.get('/equipment/:equipment', auth, getExerciseByEquipment);
router.get('/:id', auth, getExerciseById);
router.get('/target/:target', auth, getExerciseByMuscle);
router.get('/bodyPart/:bodyPart', auth, getExercisesByBodyPart);

module.exports = router;