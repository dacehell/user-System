import {
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "./actions";
export const fetchUsersStartThunk = () => {
  return async (dispatch, getState) => {
    const { users } = getState();
    if (users.data.length > 10) {
      return;
    }

    dispatch(fetchUsersStart());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
