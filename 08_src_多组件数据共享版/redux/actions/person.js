import { ADD_PERSON } from "../constant";

export const AddPersonAction = (personObj) => ({ type: ADD_PERSON, date: personObj })