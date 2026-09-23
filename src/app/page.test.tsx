import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the starter page", () => {
    render(<Home />);
    expect(screen.getByText(/to get started/i)).toBeInTheDocument();
  });
});
