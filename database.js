import pg from "pg";
import promptSync from 'prompt-sync';
import Knex from "knex";

// create ourselves a new client
// const client = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "student_database",
//     password: process.env.POSTGRES_PASSWORD,
//     port: 5432
// });

// conect that client to the database
// client.connect();

// make query
// get the results from the query
// close down our client

// const prompt = promptSync();
// const name = prompt("Please enter your last name: ");
// client.query(`SELECT * FROM student WHERE last_name LIKE '${name}'`)
// .then(response => console.log(response.rows))
// .finally (()=> client.end());

const client = Knex ({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        database: 'student_database',
        port: 5432
    }
});

const getStudentLastName = (name) => {
    return client('student')
    .select()
    .where('last_name', 'like', `%${name}`)
}

const getHouseList = () => {
    return client('house')
    .select()
}

const addNewHouse = (newhouse) => {
    return client('house')
    .insert({name: newhouse.name, head_of_house: 3, points: 0})
}

// const prompt = promptSync();
// console.log("please enter a number between 1 and 5")
// console.log("1 - Find students matching a given last name")
// console.log("2 - Get students based on a guardian's name ")
// console.log("3 - Create a new House ")
// console.log("4 - Show the classes for a given teacher. ")
// console.log("5 - Show the students in a class (ordered by mark) ")
// const option = prompt("Please choose your option: ")
// if (option == 1 ){
// const name = prompt("Please enter your last name: ");
// client('student')
// .select()
// .where('last_name', name)
// .then(response => console.log(response));
// }
// else if (option == 2 ){
//     const guardianName = prompt("Please enter the guardian's name: ");
//     client('guardian')
//     .select()
//     .join('student', 'guardian.id', '=', 'student.id')
//     .where('guardian.last_name', guardianName)
//     .then(response => console.log(response))
// }
// else if (option == 3 ){
//     const newHouse = prompt("Entre new house name here: ")
//     client('house')
//     .insert([{name:newHouse, head_of_house:3, points:0}])
//     .then(response => console.log(response))
// }

//================================

// console.log("1 - Find students matching a given last name")

// const prompt = promptSync();
// const name = prompt("Please enter your last name: ");
// client('student')
// .select()
// .where('last_name', name)
// .then(response => console.log(response));

// console.log("2 - Get students based on a guardian's name ")

// const prompt = promptSync();
// const guardian_name = prompt("Please enter guardian name: ");

// const getStudentLastName = (guardian_name) => {
// return client('student')
// .select('student.first_name', 'student.last_name', 'guardian.last_name')
// .from('guardian').leftOuterJoin('student', 'guardian.id', 'student.guardian')
// .where('guardian.last_name', guardian_name)
// // .then(response => response.json());
// }


// const getHouseList = () => {
//     return client('house')
//     .select()
// }

// console.log("3 - Create a new House ")

// const prompt = promptSync();
// const newHouse = prompt("Entre new house name here: ")
// client('house')
// .insert([{name:newHouse, head_of_house:3, points:0}])
// .then(response => console.log(response))

export default { getStudentLastName: getStudentLastName, getHouseList: getHouseList, addNewHouse: addNewHouse };