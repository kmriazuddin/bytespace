"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/slices/authSlice";
import { subscribeToAuth } from "@/lib/auth";

export default function AuthBootstrap() {
  const dispatch = useDispatch();
  useEffect(
    () =>
      subscribeToAuth((user) =>
        dispatch(
          setAuthUser(
            user
              ? {
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                }
              : null,
          ),
        ),
      ),
    [dispatch],
  );
  return null;
}
