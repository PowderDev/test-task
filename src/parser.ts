import { ALLOWED_ACTIONS } from "./constants";

export const parseInput = (string: string, start = 0) => {
  let num = 0;
  let operation = "";

  for (let i = start; i < string.length; i++) {
    const symbol = string[i];

    if (!Number.isNaN(parseInt(symbol))) {
      num = parseInt(String(num) + symbol);
      continue;
    }

    if (symbol === ",") {
      num = parseFloat(String(num) + "." + string[i + 1]);
      i += 1;
      continue;
    }

    if (ALLOWED_ACTIONS.includes(symbol)) {
      operation = symbol;
      if (string[i + 1] !== "(") {
        num = executeOperation(num, parseInput(string, i + 1), operation);
        return num;
      }
      continue;
    }

    if (symbol === "(") {
      num = executeOperation(num, parseInput(string, i + 1), operation);
      i = string.indexOf(")");
      continue;
    } else if (symbol === ")") {
      return num;
    }
  }

  return num;
};

const executeOperation = (num1: number, num2: number, op: string) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
};
