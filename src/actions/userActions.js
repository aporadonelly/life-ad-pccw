import api from "../components/employees/api/employees";
//import { GET_USER } from "./types";
import { GET_USER, GET_USER_DETAILS } from "./types"; //added

export const getHeaders = async () => {
  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return HEADERS;
};

// get username
export const getUser = () => async (dispatch) => {
  try {
    const res = await api.get("users");
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log("Oppz", error);
  }
};

//added get per login db.json
export const getUserPerLogin = (user) => async (dispatch) => {
  console.log("User: ", user);

  if (user.username === "lorem" && user.password === "ipsum") {
    dispatch({
      type: "GET_USER_DETAILS",
      payload: {
        firstName: "lorem",
        lastName: "Ipsum",
        role: "Admin Operator",
      },
    });
  }

  // try {
  //   const res = await api.get("users", config);
  //   console.log(res);
  //   dispatch({
  //     type: GET_USER_DETAILS,
  //     payload: res.data,
  //   });
  // } catch (error) {
  //   console.log("Oppz", error);
  // }
};

// end of added
