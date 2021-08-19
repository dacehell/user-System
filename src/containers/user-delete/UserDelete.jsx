import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteUserStartThunk } from "../../store/users/thunks";

const UserDelete = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const handlerOnDelete = () => {
    dispatch(deleteUserStartThunk(parseInt(id)));
    history.push("/");
  };
  useEffect(() => {
    const user = users.filter((user) => user.id === parseInt(id))[0];
    setUser(user);
  }, [id, users]);

  return (
    <>
      <div>Quieres borrar a: {user.name}</div>
      <button className="btn btn-danger" onClick={handlerOnDelete}>
        Delete
      </button>
    </>
  );
};

export default UserDelete;
