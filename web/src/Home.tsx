import { useState, useEffect } from "react";
import Button from "./components/Button";

const initialPlayers = [
  "Player 1",
  "Player 2",
  "Player 3",
  "Player 4",
  "Player 5",
  "Player 6",
];

type Player = {
  name: string;
  total: number;
  shiftTime: number;
  active: boolean;
};

type SavedState = {
  data: Player[];
  lastUpdated: number;
  clockRunning: boolean;
};

const LOCAL_STORAGE_KEY = "leagueify-timer-state";

export default function Home() {
  const [timeData, setTimeData] = useState<Player[]>([]);
  const [clockRunning, setClockRunning] = useState<boolean>(false);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  // Load saved state on first mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const { data, lastUpdated, clockRunning }: SavedState = JSON.parse(saved);
        const now = Date.now();
        const elapsed = Math.floor((now - lastUpdated) / 1000);

        const updatedData = data.map((player) => {
          if (clockRunning && player.active) {
            return {
              ...player,
              total: player.total + elapsed,
              shiftTime: player.shiftTime + elapsed,
            };
          }
          return player;
        });

        setTimeData(updatedData);
        setClockRunning(clockRunning);
        return;
      } catch (e) {
        console.error("Failed to parse saved state:", e);
      }
    }

    // Fallback if no saved state
    setTimeData(
      initialPlayers.map((player) => ({
        name: player,
        total: 0,
        shiftTime: 0,
        active: false,
      }))
    );
  }, []);

  // Timer effect
  useEffect(() => {
    if (!clockRunning) return;

    const interval = setInterval(() => {
      setTimeData((prev) => {
        const updated = prev.map((player) =>
          player.active
            ? {
              ...player,
              shiftTime: player.shiftTime + 1,
              total: player.total + 1,
            }
            : player
        );

        // Save to localStorage with current timestamp and clockRunning state
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({
            data: updated,
            lastUpdated: Date.now(),
            clockRunning: true,
          })
        );

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [clockRunning]);

  const saveState = (data: Player[], running: boolean) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        data,
        lastUpdated: Date.now(),
        clockRunning: running,
      })
    );
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const togglePlayer = (index: number) => {
    setTimeData((prev) => {
      const updated = prev.map((player, i) =>
        i === index
          ? {
            ...player,
            active: !player.active,
            shiftTime: player.active ? 0 : player.shiftTime,
          }
          : player
      );
      saveState(updated, clockRunning);
      return updated;
    });
  };

  const updatePlayerName = (index: number, newName: string) => {
    setTimeData((prev) => {
      const updated = prev.map((player, i) =>
        i === index ? { ...player, name: newName } : player
      );
      saveState(updated, clockRunning);
      return updated;
    });
  };

  const addPlayer = () => {
    setTimeData((prev) => {
      const updated = [
        ...prev,
        {
          name: `Player ${prev.length + 1}`,
          total: 0,
          shiftTime: 0,
          active: false,
        },
      ];
      saveState(updated, clockRunning);
      return updated;
    });
  };

  const resetTimers = () => {
    setShowResetModal(false);
    const resetData = timeData.map((player) => ({
      ...player,
      total: 0,
      shiftTime: 0,
      active: false,
    }));
    setTimeData(resetData);
    setClockRunning(false);
    saveState(resetData, false);
  };

  const toggleClock = () => {
    const newState = !clockRunning;
    setClockRunning(newState);
    saveState(timeData, newState);
  };

  return (
    <div className="max-w-md h-screen mx-auto p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col">
      {/* fixed header */}
      <div className={`sticky top-0 bg-gray-100 z-10 pb-2 ${clockRunning ? "hidden" : ""}`}>
        <h2 className="text-xl font-bold text-center mb-2">Leagueify Playtime Tracker</h2>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => setShowResetModal(true)}
            className="w-full bg-gray-600 text-white py-2 rounded-lg"
          >
            Reset Game
          </Button>
          <Button
            onClick={addPlayer}
            className="w-full bg-green-500 text-white py-2 rounded-lg"
          >
            Add Player
          </Button>
        </div>
      </div>

      {/* scrollable players section */}
      <div className="flex-1 overflow-y-auto space-y-4 mt-2">
        {timeData.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow relative"
          >
            <input
              type="text"
              value={player.name}
              onChange={(e) => updatePlayerName(index, e.target.value)}
              className={`w-1/2 text-left font-medium bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 ${clockRunning ? "disabled" : ""
                }`}
              {...(clockRunning && { disabled: true })}
            />
            <Button
              onClick={() => togglePlayer(index)}
              className={`ml-2 ${player.active ? "bg-red-500 text-white" : "bg-green-500 text-white"
                } px-6 py-3 rounded-lg`}
            >
              {player.active ? "In Play" : "Bench"}
            </Button>
            <div className="text-center ml-4 w-16">
              <div
                className={`text-lg font-bold tabular-nums ${player.shiftTime >= 90
                    ? "text-red-600"
                    : player.shiftTime >= 75
                      ? "text-amber-500"
                      : "text-black"
                  }`}
              >
                {formatTime(player.shiftTime)}
              </div>
              <div className="text-sm text-gray-500 tabular-nums">
                {formatTime(player.total)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* fixed start clock button */}
      <div className="sticky bottom-0 bg-gray-100 z-10 py-2">
        <Button
          onClick={toggleClock}
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          {clockRunning ? "Pause Clock" : "Start Clock"}
        </Button>
      </div>

      {/* reset modal */}
      {showResetModal && (
        <div className="z-100 fixed max-w-md mx-auto inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to reset the game?</p>
            <div className="flex justify-between">
              <Button
                onClick={resetTimers}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Yes, Reset
              </Button>
              <Button
                onClick={() => setShowResetModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
