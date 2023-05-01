import { render, screen } from "@testing-library/react";
import emojiList from "../emojiList.json";
import App from "App";

test("Renders emoji list", () => {
	render(<App />);

	emojiList = [...document.querySelectorAll(".emoji-item")].slice(0, 10);

	emojiList.map((item) => {
		expect(screen.getByText(item.title)).toBeInTheDocument();
	});
});
