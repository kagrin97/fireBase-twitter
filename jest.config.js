/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  //preset: "ts-jest",
  moduleDirectories: ["node_modules", "src"], // 절대경로를 src로 인식하도록 설정
  testEnvironment: "jsdom", // jsdom으로 수정
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"], // setupTest를 이용하여 환경 설정
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json", // tsconfig.jest.json 사용 설정
    },
  },
};
