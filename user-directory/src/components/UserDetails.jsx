import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../common/Carousel";
import { checkdevice } from "../common/common";

export const UserDetails = () => {
  const navigate = useNavigate();
  const isMobile = checkdevice();
  const param = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice?.user);
  const userPost = useSelector((state) => state?.userPost?.userPost);

  const filterdata =
    Array.isArray(userPost) &&
    userPost?.filter((i) => {
      if (i.userId == param?.id) {
        return i;
      }
    });
  useEffect(() => {
    if (Array.isArray(userPost)) {
      return;
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div
      className={`w-[100%] h-[100vh] bg-[#2727272] overflow-x-scroll bg-[url('https://iili.io/JIUeO3Q.jpg')]`}
    >
      <p className="user h-[70px] w-[80%] pt-[50px] text-center m-auto text-[#FFFFFF] text-[40px]">
        User Profile
      </p>
      <div className=" pt-[70px] h-[600px] w-[95%] m-auto">
        <div className="user-details h-[100px] mt-[10px] m-auto bg-[#c9e2f4] rounded-lg flex justify-between text-black text-[14px]">
          <div className="name1 pl-4 pt-5">
            <div>
              Name: {Array.isArray(userPost) && user[param?.id - 1]?.name}
            </div>
            <div className="post1 text-[10px]">
              <div>
                username:{" "}
                {Array.isArray(userPost) && user[param?.id - 1]?.username}
              </div>
              {!isMobile && <span className="px-2">|</span>}
              <div>
                catchPhrase:{" "}
                {Array.isArray(userPost) &&
                  user[param?.id - 1]?.company?.catchPhrase}
              </div>
            </div>
          </div>

          <div className="pr-4 pt-5">
            <div className="">
              Address:{" "}
              {Array.isArray(userPost) && user[param?.id - 1]?.address.street}
            </div>
            <div className="post1 text-[10px]">
              <div className="">
                email: {Array.isArray(userPost) && user[param?.id - 1]?.email}
              </div>
              {!isMobile && <span className="px-2">|</span>}
              <div>
                phone: {Array.isArray(userPost) && user[param?.id - 1]?.phone}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <Carousel data={filterdata} />
        </div>
      </div>
    </div>
  );
};
