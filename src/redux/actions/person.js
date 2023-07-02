import { ADD_PERSON } from '../../redux/constant'

export const addPerson = personObj => ({
    type: ADD_PERSON,
    data: personObj,
})