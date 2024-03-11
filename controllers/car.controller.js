const db = require('../db');
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
      const id = req.params.id;
      try {
         const CarById = await Car.findAll({
            where: {
               car_id: id
            }
         });
         res.status(201).json(CarById)
      } catch (e) {
         console.error(e);
         res.status(500).json({message: 'Error when getting the cars'});
      }
   }

}

module.exports = new carController();