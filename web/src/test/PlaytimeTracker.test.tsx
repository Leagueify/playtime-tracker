import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../Home";
import { expect, test, describe } from "vitest";

describe("Home Component", () => {
  test("renders the app title", () => {
    render(<Home />);
    expect(screen.getByText("Leagueify Playtime Tracker")).toBeInTheDocument();
  });

  test("adds a player when clicking 'Add Player' button", () => {
    render(<Home />);
    const addButton = screen.getByText("Add Player");
    fireEvent.click(addButton);
    expect(screen.getByDisplayValue("Player 7")).toBeInTheDocument();
  });

  test("toggles player status between 'Bench' and 'In Play'", () => {
    render(<Home />);
    const toggleButton = screen.getAllByText("Bench")[0];
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent("In Play");
  });

  test("resets all timers when clicking 'Reset Game'", () => {
    render(<Home />);
    fireEvent.click(screen.getByText("Reset Game"));
    fireEvent.click(screen.getByText("Yes, Reset"));
    const timers = screen.getAllByText("00:00");
    expect(timers.length).toBeGreaterThanOrEqual(1);
  });
});
