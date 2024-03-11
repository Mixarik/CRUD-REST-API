process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const {db, openConnection, closeConnection} = require('./db.js');
const {runMigrations} = require('./migrations');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/crud', require('./routes/car-router'));

app.listen(PORT, function (error) {
   if (error) {
      console.log('Something went wrong', error);
   } else {
      console.log('Server is listening on port' + PORT);
   }
});

async function bootstrap() {
   try {
      await openConnection();

      await runMigrations();

      console.info('Connected');

      await db.transaction(async () => {


      });

      await closeConnection();
   } catch (err) {
      console.error(err);
   }
}

bootstrap();