var ls = require("local-storage");

export default function addNewActivity(id, data) {
  try {
    ls.set(id, data);
  } catch (error) {
    console.error(error);
  }
}
