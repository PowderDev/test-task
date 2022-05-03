import "./style.css";
import { ALLOWED_SYMBOLS } from "./constants";
import { parseInput } from "./parser";

const $inputField = document.getElementById("input-field")!;
const $outputField = document.getElementById("output-field")!;

const handleDial = (symbol: string) => {
  if (symbol === "delete") {
    $inputField.textContent =
      $inputField.textContent?.slice(0, $inputField.textContent.length - 1) || "";
  } else if (symbol === "=") {
    const answer = parseInput($inputField.textContent || "");
    $outputField.textContent = $inputField.textContent;
    $inputField.textContent = String(answer);
  } else {
    $inputField.textContent += symbol;
  }
};

const handleDialClick = (e: any) => {
  if (e.target.dataset.value || e.target.dataset.enter) {
    handleDial(e.target.dataset.value);
  }
};

const handleDialPress = (e: KeyboardEvent) => {
  if (ALLOWED_SYMBOLS.includes(e.key)) {
    handleDial(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    handleDial("=");
  } else if (e.key === "Backspace") {
    handleDial("delete");
  }
};

document.addEventListener("click", handleDialClick);
document.addEventListener("keydown", handleDialPress);
