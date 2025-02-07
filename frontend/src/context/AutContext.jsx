"use client";

import { getUserApi, signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import { createContext, useContext,useEffect,useReducer } from "react";
import { resolve } from "styled-jsx/css";

const AuthContext = createContext();

const initionalState = {
  user: null,
  isLoading: true,
  error: null,
  isAuthenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "signin":
      return { isAuthenticated: true, user: action.payload };
    case "signup":
      return { isAuthenticated: true, user: action.payload };
    case "user/loaded":
      return { isAuthenticated: true, user: action.payload };
  }
};

export default function AuthProvider({ children }) {
  const router = useRouter();

  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initionalState
  );

  async function signin(values) {
    dispatch({ type: "loading" });

    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }

  async function signup(values) {
    dispatch({ type: "loading" });

    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }

  async function getUser() {
    dispatch({ type: "loading" });

    try {
      await new Promise((resolve)=> setTimeout(resolve,3000));
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
      console.log(user);
      
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }

  useEffect(() => {
    // تو یوزافکت تو نکست => نمیتونی ارو فانکشن داخلش رو تبدیل ب اسینک فانکشن کنی
    // باید داخلش ی اسینک فانکشن جدا تعریف کنی :
      async function fetchData() {
        await getUser();
      }
      fetchData();
    },[]);


  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth Context");
  return context;
}

// ------------------------------------------------------------------------------------

// نکته:

// solution 1: we need to use [state and dispatch] "everywhere" of componenets we need

// solution 2:
// we can write [SIGNIN and SIGNUP] component "here" instead of "they're components"
// and reapt and reapet = >
//  and we pass [this components] to 'AuthContext.provider' instead of [state, dispatch]
