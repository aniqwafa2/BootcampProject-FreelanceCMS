# Documentation

## API Docs

Endpoint start from `/api`

For swagger api documentation go to `/api/docs` route
Or open this link : https://freelance-api.cyclic.app/api/docs/

## Setup API Server

Untuk run/deploy aplikasi api lakukan perintah berikut:

1. install package.json pada folder server
2. `cp .env.example .env` : isi dan rubah sesuai dengan environment dan konfigurasi dbms yang digunakan
3. `sequelize-cli db:create && sequelize-cli db:migrate` : untuk inisialisasi db dan migrating
4. jalankan aplikasi dengan `npm start` pada folder server

`Note`:

- jenis env yang digunakan ada `development`, `test`, `production`
- jika tidak ada .env maka env default (`development`) yang akan dijalankan

## Setup CMS React

Untuk build/deploy aplikasi cms lakukan perintah berikut:

1. install package.json pada folder cms
2. `npm run build` : isi dan rubah sesuai dengan environment dan konfigurasi dbms yang digunakan
3. serve pada folder buildpath, dan buka url sesuai yg di serve

## Sequelize-cli model generate

```
npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string,balance:integer,role:integer
npx sequelize-cli model:generate --name userProfile --attributes address:string,image:string,skill:string
npx sequelize-cli model:generate --name applicant --attributes jobId:integer,userId:integer,status:boolean
npx sequelize-cli model:generate --name job --attributes name:string,price:integer,description:string,categoryId:integer,status:boolean,file:string,dueDate:date
npx sequelize-cli model:generate --name category --attributes name:string,description:string
npx sequelize-cli model:generate --name messageContact --attributes senderId:integer,recipientId:integer
npx sequelize-cli model:generate --name messageRecord --attributes messageContactId:integer,userId:integer,messageContent:string

```

## Sequelize-cli seed generate

```
sequelize-cli seed:generate --name devSeed
```
