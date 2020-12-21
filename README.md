# nodejs-express-sequelize

Testing the sequelize-cli

1) ```npx sequelize-cli init```
2) Modify config/config.json
3) ```npx sequelize-cli db:create```
4) ```npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string```
5) ```npx sequelize-cli db:migrate```
6) ```npx sequelize-cli seed:generate --name users```
7) Update the user.js seeder file
8) ```npx sequelize-cli model:generate --name Item --attributes title:string,link:string,userId:integer```
9) ```npx sequelize-cli db:migrate```
10) ```npx sequelize-cli seed:generate --name items```
11) Update the item.js seeder file
12) ```npx sequelize-cli db:seed:all```
