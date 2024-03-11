const Router = require('express');

const useController = require('../controllers/car.controller');

const router = new Router();


router.get('/get-cars', useController.getCars);

router.get('/get-cars/:id', useController.getOneCar);

router.post('/create-new-car', useController.createCar);

router.put('/update-car/:id', useController.updateCar);

router.delete('/delete-car/:id',useController.deleteCar);

module.exports = router;
