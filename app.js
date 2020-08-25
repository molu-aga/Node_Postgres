 const express = require('express'); 
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser=require('body-parser'); 
const _ =require("lodash");
const Sequelize = require('sequelize');
const sq=require("./config/sequelize")

const app = express();

sq.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.engine('handlebars', expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extented: false}));

app.use(express.static("public"));

app.use('/guests',require('./routes/guests'));

 app.get("/",function(req,res){
  res.render("index",{layout:'landing'});
});  

  app.listen(3000,function(req,res){
    console.log("running");
  }); 






  
/* app.post("/",function(req,res){
  var designation= req.body.designation;
  var name= req.body.name;
  var email= req.body.email;
  var gender= req.body.Gender;
  var event= req.body.event;
  var number= req.body.number;
  var allergy= req.body.allergy;


  // Table createdreturn 
    Guest.create({
        Designation:designation,
        Name: name,
         Email: email,
        Gender:gender,
        Event: event,
        Number: number,
        Allergy: allergy
    });
 // result= designation+"."+" "+name+" is attending the event:"+event+", is allergic to:"+allergy;
    
}); */



/* const { Client } = require('pg'); 
 client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'guest_db',
    port:5432
});
  
client.connect(); */

/* const query = `
CREATE TABLE users (
  Designation varchar,
      Name varchar,
       Email varchar,
      Gender varchar,
      Event varchar,
      Number int,
      Allergy varchar
);
`;

client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Table is successfully created');
  client.end();
}); */
/* 
const query = `
INSERT INTO users(Designation,Name,Email, Gender, Event , Number, Allergy)
VALUES ('Miss','Meenakshi','something@gmail.com','Female','Beauty Pagent', 1234567890,'Dust' )
`;

client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Data insert successful');
  client.end();
}); */
/* 
const query = `
SELECT *
FROM users
`;
client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  for (let row of res.rows) {
      console.log(row);
  }
  client.end();
});
// promise
client
  .query('SELECT NOW() as now')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))  */

 


 