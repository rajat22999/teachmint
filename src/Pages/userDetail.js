import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../Components/PostCard";
import BackButton from "../Components/BackButton";

const UserDetail = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [userData, setUserData] = useState([]);
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(true);

  const getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  };

  const fetchSingleUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    getPost();
    if (params?.id) fetchSingleUser();
  }, [params?.id]);

  let interval;
  useEffect(() => {
    if (start) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!start && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="user-detail container">
      <div className="user-detail-title">
        <BackButton />
        <h1>User Profile</h1>
        <div>
          <divm className="timer-block">
            <p>{formatTime()}</p>
            <button
              onClick={() => setStart(!start)}
              style={{ backgroundColor: start ? "red" : "#1ea1f1" }}
            >
              {start ? "Pause" : "Start"}
            </button>
          </divm>
        </div>
      </div>
      <div className="user-detail-card">
        <div className="image-block">
          <img src="/avatars/1.png" width={80} height={80} />
          <div className="username">
            <h2>{data?.name}</h2>
            <p>{data?.username}</p>
          </div>
        </div>
        <div>
          <div className="address">
            <h3>Email :</h3>
            <p>{data?.email}</p>
          </div>
          <div className="address">
            <h3>Phone :</h3>
            <p>{data?.phone}</p>
          </div>
          <div className="address">
            <h3>Address :</h3>
            <p>
              {data?.address?.suite +
                ", " +
                data?.address?.street +
                ", " +
                data?.address?.city +
                ", " +
                data?.address?.zipcode}
            </p>
          </div>
        </div>
      </div>
      <div className="post-card-container">
        {userData?.map((item) => {
          return (
            <Fragment key={item.id}>
              <PostCard data={item} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetail;
