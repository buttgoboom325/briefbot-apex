const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body);
  const db = new sqlite3.Database("./data.sqlite");

  const hashed = await bcrypt.hash(password, 10);
  return new Promise((resolve) => {
    db.run("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashed], (err) => {
      if (err) resolve({ statusCode: 400, body: "Email already exists" });
      else resolve({ statusCode: 200, body: JSON.stringify({ success: true }) });
    });
  });
};
