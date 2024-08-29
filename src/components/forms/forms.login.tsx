"use client";

import React from "react";
import Input from "../fields/fields.input";
import { loginAPI } from "@/api/api.auth";
import { pushAuthDataToStorage, setAuthToCookie } from "@/utils/utils.auth";
import { useRouter } from "next/navigation";
import Paths from "@/constants/paths";

const inputStyle = "mb-[10px] rounded-[2px] h-[40px] px-[8px] text-[#000]";
const inputOption = (props: { placeholder: string; name: string }) => {
  return {
    className: inputStyle,
    ...props,
  };
};

export default function FormLogin() {
  const router = useRouter();

  const onSubmit = (event: any) => {
    event.preventDefault();

    const { account, password } = event.target;

    if (!account.value.trim() || !password.value.trim()) {
      return;
    }

    const data = {
      email: account.value,
      password: password.value,
    };

    loginAPI(data)
      .then((res) => {
        setAuthToCookie(res.data.access_token);
      })
      .catch((e) => {})
      .finally(() => {
        router.replace(Paths.home);
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-slate-500 min-h-[300px] w-[500px] p-5 rounded-md flex flex-col justify-between"
    >
      <div className="flex flex-col">
        <Input
          type="text"
          options={inputOption({
            placeholder: "Tài khoản",
            name: "account",
          })}
        />
        <Input
          type="password"
          options={inputOption({
            placeholder: "Mật khẩu",
            name: "password",
          })}
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <button className="bg-red-100 text-white w-full py-[5px] uppercase text-sm">
          login
        </button>
      </div>
    </form>
  );
}
