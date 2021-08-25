import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUsersStartThunk } from "../../store/users/thunks";
import { useHistory } from "react-router-dom";

const UserUpdate = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(id));
    setName(user.name);
    setUsername(user.username);
    setPhone(user.phone);
    setEmail(user.email);
    setWebsite(user.website);
  }, [users, id]);

  const handlerOnUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUsersStartThunk({
        id: parseInt(id),
        name: name,
        username: username,
        phone: phone,
        email: email,
        website: website,
      })
    );

    history.push("/");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handlerOnUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="website">
              Website
            </label>
            <input
              type="text"
              className="form-control"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
        {/* <form onSubmit={handlerOnUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Update</button>
      </form> */}
      </div>
    </>
  );
};

export default UserUpdate;
