var ls = require("local-storage");

export default function getAllActivities(id) {
  try {
    const response = ls.get(id);
    return response;
  } catch (error) {
    console.error(error);
  }
}
