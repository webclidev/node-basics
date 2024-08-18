// this setup is not required in node v20+
// https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
import { readFileSync } from "fs";
import { resolve } from "path";

export const loadEnv = () => {
  const envFilePath = resolve(process.cwd(), ".env");
  const envFileContent = readFileSync(envFilePath, "utf8");

  // Split the content by new lines and filter out any empty lines
  const envVariables = envFileContent.split("\n").filter(Boolean);

  envVariables.forEach((line) => {
    const [key, value] = line.split("=");
    process.env[key.trim()] = value.trim();
  });
};
