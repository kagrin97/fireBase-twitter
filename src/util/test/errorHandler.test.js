import React from "react";
import { errorHandler } from "../errorHandler";

const error = { message: "Firebase: Error (auth/wrong-password)." };

test("에러 메시지를 제대로 가져오는지", () => {
  expect(errorHandler(error)).toBe("wrong password");
});
