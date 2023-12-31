import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsRequest } from "../slice/userListSlice";
import { getUserPostSliceRequest } from "../slice/getUserPostSlice";
import { useNavigate } from "react-router-dom";
import { getCountriesSliceRequest } from "../slice/getCountriesSlice";

export const User = () => {
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice?.user);
  const userPost = useSelector((state) => state?.userPost?.userPost);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserDetailsRequest());
    dispatch(getUserPostSliceRequest());
    dispatch(getCountriesSliceRequest());
  }, []);
  function getpost() {
    let obj = {};
    for (let i in userPost) {
      let user = userPost[i].userId;
      if (!obj[user]) {
        obj[user] = 1;
      } else {
        obj[user] = obj[user] + 1;
      }
    }
    setPost(obj);
  }

  useEffect(() => {
    if (Array.isArray(userPost)) {
      getpost();
    }
  }, [userPost]);

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div
      className={`w-[100%] h-[100vh] bg-[#2727272] overflow-x-scroll bg-[url('https://iili.io/JIUeO3Q.jpg')]`}
    >
      <p className="user h-[70px] w-[80%] pt-[50px] text-center m-auto text-[#FFFFFF] text-[40px]">
        User Directory
      </p>
      <div className="c1 pt-[70px]">
        {Array.isArray(user) &&
          user?.map((i, j) => (
            <>
              <div
                className="user-list h-[70px] w-[85%] mt-[10px] m-auto bg-[#c9e2f4] rounded-lg flex justify-between text-black text-[16px]"
                onClick={() => handleNavigate(i.id)}
              >
                <div className="name pl-6 pt-6">Name: {i?.name}</div>
                <div className="post  pr-6 pt-6">Posts:{post[j + 1]}</div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};
