import { render, screen } from "@testing-library/react";
import App from "../components/App"

test("header renders with react testing", () => {
  render(<App/>);
  const linkElement = screen.getByText(/React testing/i);
  expect(linkElement).toBeInTheDocument();
});