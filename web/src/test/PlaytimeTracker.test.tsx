import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../Home";
import { beforeEach, expect, test, describe } from "vitest";

describe("Home Component", () => {
  beforeEach(() => {
    localStorage.clear();
    render(<Home />);
  })

  test("renders the app title", () => {
    expect(screen.getByText("Leagueify Playtime Tracker")).toBeInTheDocument();
  });

  test("adds a player when clicking 'Add Player' button", () => {
    const addButton = screen.getByText("Add Player");
    fireEvent.click(addButton);
    expect(screen.getByDisplayValue("Player 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 2")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 3")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 4")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 5")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 6")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 7")).toBeInTheDocument();
  });

  test("toggles player status between 'Bench' and 'In Play'", () => {
    const toggleButton = screen.getAllByText("Bench")[0];
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent("In Play");
  });

  test("resets all timers when clicking 'Reset Game'", () => {
    fireEvent.click(screen.getByText("Reset Game"));
    fireEvent.click(screen.getByText("Yes, Reset"));
    const timers = screen.getAllByText("00:00");
    expect(timers.length).toBe(12);
  });

  test("resets application when clicking 'Reset App'", () => {
    const addButton = screen.getByText("Add Player");
    fireEvent.click(addButton);
    expect(screen.getByDisplayValue("Player 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 2")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 3")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 4")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 5")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 6")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Player 7")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Reset App"));
    fireEvent.click(screen.getByText("Yes, Reset"));
    const timers = screen.getAllByText("00:00");
    expect(timers.length).toBe(12);
  })
});
