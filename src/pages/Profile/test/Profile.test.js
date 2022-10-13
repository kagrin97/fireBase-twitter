import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../Profile";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Profile /> 컴포넌트 작동하는지", () => {
  const setStateMock = jest.fn();
  const useStateMock = (useState) => [useState, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  test("display name이 변경되는지", () => {
    render(<Profile />, { wrapper: BrowserRouter });
    const inputDisplayName = screen.getByPlaceholderText(/Display name/i);
    userEvent.type(inputDisplayName, "강민규");

    expect(inputDisplayName).toHaveValue("강민규");
  });

  test("아바타 사진이 변경버튼이 존재하는지", () => {
    render(<Profile />, { wrapper: BrowserRouter });
    const changePhotoButton = screen.getByText("+");
    expect(changePhotoButton).toBeInTheDocument();
  });

  test("onClearPhoto 함수가 작동하는지", () => {
    render(<Profile />, { wrapper: BrowserRouter });
    const onClearPhotoButton = screen.getByText("x");
    userEvent.click(onClearPhotoButton);

    expect(setStateMock).toHaveBeenCalledWith("");
  });
});
