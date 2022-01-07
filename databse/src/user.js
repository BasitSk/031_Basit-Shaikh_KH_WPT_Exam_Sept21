const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "react",
};

const selectUser = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from message`;
  const list = connection.queryAsync(sql);
  console.log("connection success..");
  await connection.endAsync();
  return list;
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into message (msg) values(?)`;
  await connection.queryAsync(sql, [user.message]);
  console.log("Message Added..");

  await connection.endAsync();
};

// let user = { message: "Hi, how are you?" };
// addUser(user);
// selectUser();

module.exports = { selectUser, addUser };
