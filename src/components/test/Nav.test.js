import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "../Nav";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Link 태그 검사", () => {
  test("3개의 Link 태그에 hover하면 color가 yellow-500으로 바뀌는지 확인", () => {
    render(<Nav />, { wrapper: BrowserRouter });
    const link3 = screen.getAllByRole("link");
    link3.forEach((el) => {
      userEvent.hover(el);
      expect(el).toHaveStyle({ color: "yellow-500" });
    });
  });

  test("3개의 Link 태그에 href값이 존재하는지", () => {
    render(<Nav />, { wrapper: BrowserRouter });
    const homeLink = screen.getByText("Home");
    const profileLink = screen.getByText("Profile");
    const logOutLink = screen.getByText("Home");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(profileLink).toHaveAttribute("href", "/profile");
    expect(logOutLink).toHaveAttribute("href", "/");
  });
});
