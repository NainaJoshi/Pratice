const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'EmployeeRecords';
async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Records1');
  //const insertResult = await collection.insertMany([{ Name:"Naina", Designation:"HR",EmpId:"101"},{Name:"Neha", Designation:"Manager", EmpId:"102"},{ Name:"Shruti", Designation:"CEO",EmpId:"50"}]);
  //console.log('Inserted documents =>', insertResult);
  const filteredDocs = await collection.find({$or:[{ EmpId:"101"}, {Name: "Naina"}]}).toArray();
   console.log('Found documents filtered by { Name: "Naina" AND EmpId:"101" } =>', filteredDocs);
  // const filteredDocs = await collection.find({ EmpId: { $ne: "101" } }).toArray();
  // console.log('Found documents filtered by { Following EmpId are greater than 101 } =>', filteredDocs);
  // const filteredDocs = await collection.find({ EmpId: { $ne: "101" } }).toArray();
  // console.log('Found documents filtered by { Following EmpId are equal to 101 } =>', filteredDocs);

}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
