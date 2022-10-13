import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../Profile";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Profile /> 컴포넌트의 useState 작동하는지", () => {
  const setStateMock = jest.fn();
  const useStateMock = (useState) => [useState, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  test("onClearPhoto 함수가 작동하는지", () => {
    render(<Profile />, { wrapper: BrowserRouter });
    const onClearPhotoButton = screen.getByText("x");
    userEvent.click(onClearPhotoButton);

    expect(setStateMock).toHaveBeenCalledWith("");
  });
});
