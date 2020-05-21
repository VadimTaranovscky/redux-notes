import {
  HIDE_ALERT,
  SHOW_ALERT,
  LOAD_ALL_NOTES,
  SHOW_LOADER,
  ADD_NOTE,
  REMOVE_NOTE,
} from "./types";
import Axios from "axios";

const url = "https://react-notes-3a1bc.firebaseio.com";

export const hideAlert = () => ({ type: HIDE_ALERT });

export const showAlert = (text, shortMessage, type) => ({
  type: SHOW_ALERT,
  payload: { text, shortMessage, type },
});
//
export const loadNotes = () => {
  return async (dispacth) => {
    dispacth({ type: SHOW_LOADER });
    const response = await Axios.get(`${url}/notes.json`);
    const payload = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    dispacth({ type: LOAD_ALL_NOTES, payload });
  };
};

export const add = (title) => {
  return async (dispacth) => {
    const data = { title, date: new Date().toLocaleDateString() };
    const response = await Axios.post(`${url}/notes.json`, data);
    const payload = { id: response.data.name, ...data };
    dispacth({ type: ADD_NOTE, payload });
  };
};

export const remove = (id) => {
  return async (dispacth) => {
    await Axios.delete(`${url}/notes/${id}.json`);
    dispacth({ type: REMOVE_NOTE, payload: id });
  };
};
