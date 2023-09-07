import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

//Action
  export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await axios.get(baseUrl + "/getTodo");
    return response?.data?.data;
  });

  export const deleteTodo = createAsyncThunk("deleteTodo", async (toDoId) => {
    console.log("inside deleteTodo toDoId: ", toDoId)
    const response = await axios.post( baseUrl + "/deleteTodo", {
                        toDoId: toDoId
                      })
    return response?.data?.data;
  });

  export const activeToDo = createAsyncThunk("activeToDo", async (toDoId) => {
    const response = await axios.put( baseUrl + "/activeToDo", {
      toDoId: toDoId
    })
    return response?.data?.data;
  });

  export const createTodos = createAsyncThunk("createTodos", async (recVar) => {
    const name = recVar[0];
    const description = recVar[1];
    const response = await axios.post(baseUrl + "/addTodo", {
       toDoName: name,
       toDoDescription: description
    });
    return response?.data?.data;
  });
  
  const todoSlice = createSlice({
    name: "todo",
    initialState: {
      isLoading: false,
      data: null,
      isError: false,
    },
    extraReducers: (builder) => {
      //fetchTodos
      builder.addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        //console.log("fetchTodos.fulfilled :", action.payload);
      });
      builder.addCase(fetchTodos.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });

      //createTodos
      builder.addCase(createTodos.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(createTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        //console.log("createTodos.fulfilled :", action.payload);
      });
      builder.addCase(createTodos.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });

      //deleteTodo
      builder.addCase(deleteTodo.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        //console.log("deleteTodo.fulfilled :", action.payload);
      });
      builder.addCase(deleteTodo.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });

      //activeToDo
      builder.addCase(activeToDo.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(activeToDo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        //console.log("activeToDo.fulfilled :", action.payload);
      });
      builder.addCase(activeToDo.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
  });

export default todoSlice.reducer;