const csv = require('csv-parser');
const fs = require('fs');

const users = [
    {
      id: 1,
      name: 'Đào Xuân Tùng',
      email: "leooblivion24@gmail.com",
      password: "12345"
    }, {
      id: 2,
      name: 'Vũ Đức Cường',
      email: "vuduccuong.sk48@gmail.com",
      password: "123456"
    }, {
      id: 3,
      name: 'Đinh Tuấn Anh',
      email: "anhdt25@gmail.com",
      password: "1234567"
    }
  ];

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'collections/users.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'name', title: 'name'},
    {id: 'email', title: 'email'},
    {id: 'password', title: 'password'},
  ]
});

fs.createReadStream('collections/books.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

csvWriter
.writeRecords(users)
.then(()=> console.log('The CSV file was written successfully'));