import fs from "fs";
import path from "path";

const filePath = path.resolve("src/data/mock-users.json");

let cachedUsers = null;

export async function getAllUsers() {
  if (!cachedUsers) {
    const rawFile = fs.readFileSync(filePath);
    cachedUsers = JSON.parse(rawFile);
  }
  return cachedUsers;
}

export async function getUserById(id) {
  const users = await getAllUsers();
  return users.find(u => u.id.toString() === id.toString());
}
