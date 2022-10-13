import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthForm from "../components/AuthForm";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

let setStateMock = jest.fn();
const useStateMock = (useState) => [useState, setStateMock];
jest.spyOn(React, "useState").mockImplementation(useStateMock);

describe("회원가입, 로그인 버튼 작동하는지", () => {
  beforeEach(() => {
    setStateMock.mockClear();
    setStateMock = jest.fn();
  });

  test("회원가입 버튼 작동하는지", () => {
    render(<AuthForm />, { wrapper: BrowserRouter });
    const signUpButton = screen.getByDisplayValue("계정 생성");
    userEvent.click(signUpButton);

    expect(setStateMock).toHaveBeenCalledWith(true);
  });

  test("로그인 버튼 작동하는지", () => {
    render(<AuthForm />, { wrapper: BrowserRouter });
    const signInButton = screen.getByDisplayValue("로그인");
    userEvent.click(signInButton);

    expect(setStateMock).toHaveBeenCalledWith(false);
  });
});

describe("이메일, 비밀번호 input이 잘 작동하는지", () => {
  beforeEach(() => {
    setStateMock.mockClear();
    setStateMock = jest.fn();
  });

  test("이메일 input이 잘 작동하는지", () => {
    render(<AuthForm />, { wrapper: BrowserRouter });
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const email = "kagrin97@gmail.com".split("");
    userEvent.type(emailInput, "kagrin97@gmail.com");

    email.forEach((val, index) =>
      expect(setStateMock).toHaveBeenNthCalledWith(index + 1, val)
    );
  });

  test("비밀번호 input이 잘 작동하는지", () => {
    render(<AuthForm />, { wrapper: BrowserRouter });
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const password = "12345678".split("");
    userEvent.type(passwordInput, "12345678");

    password.forEach((val, index) =>
      expect(setStateMock).toHaveBeenNthCalledWith(index + 1, val)
    );
  });
});
