import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../store/users/selector";
import { fetchUsersStartThunk } from "../../store/users/thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersStartThunk());
  }, [dispatch]);
  const users = useSelector(usersSelector);
  return (
    <div>
      <h1 className="text-center">Users</h1>
      <div>
        <div className="container">
          <div className="row">
            {users.data.length > 1 &&
              users.data.map((user) => (
                <div key={user.id} className="col col-md-6 col-lg-4">
                  {/* <button onClick={editUserStart}>Edit</button> */}
                  {/* <div>
                {user.name} - <span> {user.username}</span>
              </div> */}
                  {/* <button onClick={deleteUserStart}>Delete</button> */}

                  <div className="card my-4 bg-primary text-white">
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>

                      <p className="card-text">
                        <span className="fw-bold">User: </span>
                        {user.username}
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={["fas", "phone"]}
                        />
                        {user.phone}
                      </li>
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={["fas", "envelope"]}
                        />
                        {user.email}
                      </li>
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={["fas", "map-pin"]}
                        />
                        {user.address.city}
                      </li>
                      <li className="list-group-item text-center fw-bold fs-5">
                        {user.website}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserContainer;
