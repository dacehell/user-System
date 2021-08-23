import {
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  createUsersStart,
  createUsersSuccess,
  createUsersFailure,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,
} from "./actions";
export const fetchUsersStartThunk = () => {
  return async (dispatch, getState) => {
    // const { users } = getState();
    // if (users.data.length > 1) {
    //   return;
    // }

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

export const deleteUserStartThunk = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUserStart());
    try {
      // const requestOptions = {
      //   method: "DELETE",
      //   mode: "cors",
      //   cache: "default",
      // };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const data = await response.json;
      dispatch(deleteUserSuccess(id));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
};
//create
export const createUsersStartThunk = (user) => {
  return async (dispatch) => {
    // const { users } = getState()
    // if (users.data.length > 10) {
    // 	return
    // }
    dispatch(createUsersStart());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      dispatch(createUsersSuccess(user));
    } catch (error) {
      dispatch(createUsersFailure(error.message));
    }
  };
};

//update
export const updateUsersStartThunk = (user) => {
  debugger;
  return async (dispatch) => {
    // const { users } = getState()
    // if (users.data.length > 10) {
    // 	return
    // }
    dispatch(updateUsersStart());

    try {
      // debugger
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      dispatch(updateUsersSuccess(user));
    } catch (error) {
      dispatch(updateUsersFailure(error.message));
    }
  };
};
