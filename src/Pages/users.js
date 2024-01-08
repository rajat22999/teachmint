import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Users = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  console.log("userList", userList);
  const getUsersList = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      });
  };
  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="user-list container">
      <h1>User List</h1>
      {userList?.map((item) => {
        return (
          <div
            key={item?.id}
            className="user-card"
            onClick={() => {
              navigate(`/userDetail/${item?.id}`);
            }}
          >
            <div className="left-block">
              <img src="/avatars/1.png" width={50} height={50} />
              <h2>{item?.name}</h2>
            </div>
            <p>Posts: {100}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
