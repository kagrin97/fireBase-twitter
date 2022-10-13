import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthForm from "../components/AuthForm";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("회원가입, 로그인 버튼 작동하는지", () => {
  const setStateMock = jest.fn();
  const useStateMock = (useState) => [useState, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

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
