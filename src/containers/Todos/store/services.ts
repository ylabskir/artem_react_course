import axios from "axios";

export const fetchTodosRequestService = (payload?: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
