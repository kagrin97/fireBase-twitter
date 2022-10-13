import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Auth from "../Auth";
import { BrowserRouter } from "react-router-dom";

describe("Google, GitHub 로그인 버튼이 존재하는지", () => {
  test("Google 로그인 버튼 존재하는지", () => {
    render(<Auth />, { wrapper: BrowserRouter });
    const googleLogInButton = screen.getByRole("button", {
      name: /google/i,
    });
    expect(googleLogInButton).toBeInTheDocument();
  });

  test("GitHub 로그인 버튼 존재하는지", () => {
    render(<Auth />, { wrapper: BrowserRouter });
    const gitHubLogInButton = screen.getByRole("button", {
      name: /github/i,
    });
    expect(gitHubLogInButton).toBeInTheDocument();
  });
});
