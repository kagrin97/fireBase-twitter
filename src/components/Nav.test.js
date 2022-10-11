/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("3개의 Link에 hover:text-yellow-500가 존재하는지 확인", async () => {
  render(<Nav />, { wrapper: BrowserRouter });
  const HomeBtn = screen.getAllByRole("button");
  HomeBtn.forEach((el) => {
    expect(el).toHaveClass("hover:text-yellow-500");
  });
});
