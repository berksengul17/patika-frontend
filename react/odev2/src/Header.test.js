import { render, screen } from "@testing-library/react/types";
import userEvent from "@testing-library/user-event";

test("Should render header", () => {
	expect(screen.getByText("Emoji Search")).toBeInTheDocument();
});
