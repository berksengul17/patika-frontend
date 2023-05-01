import { fireEvent, render, screen } from "@testing-library/react";
import App from "App";

test("Copies emoji", () => {
	render(<App />);

	const copyEmoji = screen.getByText("Grinning");
	fireEvent.click(copyEmoji);

	expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
		"😀"
	);
});
