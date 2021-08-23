import { initialStateUser } from "../initialState";
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CREATE_USERS_START,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  UPDATE_USERS_START,
  UPDATE_USERS_SUCCESS,
  UPDATE_USERS_FAILURE,
} from "./constants";

const usersReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isLoading: "loading",
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: "succeeded",
        data: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: "failed",
        data: [],
      };

    case DELETE_USER_START:
      return {
        ...state,
        isLoading: "loading",
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: "succeeded",
        data: state.data.filter((user) => user.id !== parseInt(action.payload)),
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: "failed",
        data: [],
      };
    case CREATE_USERS_START:
      return {
        ...state,
        isLoading: "loading",
      };
    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        isLoading: "succeeded",
        data: [...state.data, action.payload],
      };
    case CREATE_USERS_FAILURE:
      return {
        ...state,
        isLoading: "failed",
        data: [],
      };
    case UPDATE_USERS_START:
      return {
        ...state,
        isLoading: "loading",
      };
    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
        isLoading: "succeeded",
        data: action.payload,
      };
    case UPDATE_USERS_FAILURE:
      return {
        ...state,
        isLoading: "failed",
        data: [],
      };
    default:
      return state;
  }
};
export default usersReducer;
