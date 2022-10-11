/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("3개의 Link 태그에 hover하면 color가 yellow-500으로 바뀌는지 확인", async () => {
  render(<Nav />, { wrapper: BrowserRouter });
  const LinkBtn3 = screen.getAllByRole("link");
  LinkBtn3.forEach((el) => {
    fireEvent.mouseOver(el);
    expect(el).toHaveStyle({ color: "yellow-500" });
  });
});
