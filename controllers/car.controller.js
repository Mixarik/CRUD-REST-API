const {Car} = require('../models/Car');

class carController {
   async createCar(req, res) {
      try {
         const carData = req.body;
         const newCar = await Car.create(carData);
         res.status(201).json(newCar);
      } catch (e) {
         console.error(e);
         res.status(500).json({message: 'Error when adding a car'});
      }
   }

   async getCars(req, res) {
      try {
         const allCars = await Car.findAll();
         res.status(201).json(allCars)
      } catch (e) {
         console.error(e);
         res.status(500).json({message: 'Error when getting the cars'});
      }
   }

   async getOneCar(req, res) {
      try {
         const CarById = await Car.findByPk(req.params.id);
         res.status(201).json(CarById)
      } catch (e) {
         console.error(e);
         res.status(500).json({message: 'Error when getting a car'});
      }
   }

   async updateCar(req, res) {
      try {
         await Car.update(req.body, {where: {car_id: req.params.id}});

         res.status(201).json([await Car.findByPk(req.params.id), {message: `car_id: ${req.params.id} was updated`}])
      } catch (e) {
         console.error(e);
         res.status(500).json({message: 'Error when updating a car'});
      }
   }

   async deleteCar(req, res) {
      try {
         await Car.destroy({where: {car_id: req.params.id}});

         res.status(201).json({message: `car_id:${req.params.id} was removed`})
      } catch (e) {
         console.error(e);
         res.status(500).json({message: 'Error when removing a car'});
      }
   }


}

module.exports = new carController();