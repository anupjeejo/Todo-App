import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodo = async (setToDoList) => {
    axios
    .get( baseUrl + "/getTodo")
    .then( (respone) => {
              setToDoList(respone?.data?.data);
           })
    .catch((error) => {
      console.log("error msg:", error);
    })
}

export const createTodo = async (name, description, setToDoList, setName, setDescription) => {
      axios
      .post( baseUrl + '/addTodo', {
          toDoName: name,
          toDoDescription: description
      })
      .then(()=>{
        getTodo(setToDoList)
        setName("")
        setDescription("")
      })
      .catch((error) => {
        console.log("error msg:", error);
      })
}

export const deleteTodo = async (toDoId, setToDoList) => {
    axios
    .post( baseUrl + '/deleteTodo', {
        toDoId: toDoId
    })
    .then(() =>{
      getTodo(setToDoList)
    })
    .catch((error) => {
      console.log("error msg:", error);
    })
}

export const activeToDo = async (toDoId, setToDoList) => {
    axios
    .put( baseUrl + '/activeToDo', {
        toDoId: toDoId
    })
    .then(() =>{
      getTodo(setToDoList)
    })
    .catch((error) => {
      console.log("error msg:", error);
    })
}