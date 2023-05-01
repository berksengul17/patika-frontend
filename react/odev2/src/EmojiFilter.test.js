import { render, screen, fireEvent } from "@testing-library/react";
import App from "App";

test("Filters emoji", () => {
	render(<App />);

	const emoji = "100";
	fireEvent.click(emojiFilter, emoji);

	expect(screen.getByText(emoji)).toBeInTheDocument();
});
