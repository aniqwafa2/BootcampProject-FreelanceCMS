# Documentation

## API Docs

Endpoint start from `/api`

For swagger api documentation go to `/api/docs` route

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

## .env

Untuk run/deploy aplikasi lakukan perintah berikut:

1. install package.json
2. `cp .env.example .env` : isi dan rubah sesuai dengan environment dan konfigurasi dbms yang digunakan
3. `sequelize-cli db:create && sequelize-cli db:migrate` : untuk inisialisasi db dan migrating
4. jalankan aplikasi

`Note`:

- jenis env yang digunakan ada `development`, `test`, `production`
- jika tidak ada .env maka env default (`development`) yang akan dijalankan
