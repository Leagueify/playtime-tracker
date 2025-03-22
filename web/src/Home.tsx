import { useState, useEffect } from "react";
import Button from "./components/Button";

const initialPlayers = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6"];

type Player = {
  name: string;
  total: number;
  shiftTime: number;
  active: boolean;
};

export default function HockeyTimeTracker() {
  const [timeData, setTimeData] = useState<Player[]>([]);
  const [clockRunning, setClockRunning] = useState<boolean>(false);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  useEffect(() => {
    setTimeData(
      initialPlayers.map((player) => ({ name: player, total: 0, shiftTime: 0, active: false }))
    );
  }, []);

  useEffect(() => {
    if (!clockRunning) return;
    const interval = setInterval(() => {
      setTimeData((prev) =>
        prev.map((player) =>
          player.active
            ? { ...player, shiftTime: player.shiftTime + 1, total: player.total + 1 }
            : player
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [clockRunning]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const togglePlayer = (index: number) => {
    setTimeData((prev) =>
      prev.map((player, i) =>
        i === index ? { ...player, active: !player.active, shiftTime: player.active ? 0 : player.shiftTime } : player
      )
    );
  };

  const updatePlayerName = (index: number, newName: string) => {
    setTimeData((prev) =>
      prev.map((player, i) => (i === index ? { ...player, name: newName } : player))
    );
  };

  const addPlayer = () => {
    setTimeData((prev) => [...prev, { name: `Player ${timeData.length + 1}`, total: 0, shiftTime: 0, active: false }]);
  };

  const resetTimers = () => {
    setShowResetModal(false);
    setTimeData((prev) =>
      prev.map((player) => ({ ...player, total: 0, shiftTime: 0, active: false }))
    );
    setClockRunning(false);
  };

  return (
    <div className="max-w-md h-screen mx-auto p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col">

      {/* fixed header */}
      <div className="sticky top-0 bg-gray-100 z-10 pb-2">
        <h2 className="text-xl font-bold text-center mb-2">Leagueify Playtime Tracker</h2>
        <div className="flex flex-col gap-2">
          <Button onClick={() => setShowResetModal(true)} className="w-full bg-gray-600 text-white py-2 rounded-lg">
            Reset Game
          </Button>
          <Button onClick={addPlayer} className="w-full bg-green-500 text-white py-2 rounded-lg">
            Add Player
          </Button>
        </div>
      </div>

      {/* scrollable players section */}
      <div className="flex-1 overflow-y-auto space-y-4 mt-2">
        {timeData.map((player, index) => (
          <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow relative">
            <input
              type="text"
              value={player.name}
              onChange={(e) => updatePlayerName(index, e.target.value)}
              className="w-1/2 text-left font-medium bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <Button
              onClick={() => togglePlayer(index)}
              className={`ml-2 ${player.active ? "bg-red-500 text-white" : "bg-green-500 text-white"} px-6 py-3 rounded-lg`}
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
              <div className="text-sm text-gray-500 tabular-nums">{formatTime(player.total)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* fixed start clock button */}
      <div className="sticky bottom-0 bg-gray-100 z-10 py-2">
        <Button onClick={() => setClockRunning(!clockRunning)} className="w-full bg-blue-500 text-white py-2 rounded-lg">
          {clockRunning ? "Pause Clock" : "Start Clock"}
        </Button>
      </div>

      {/* reset modal */}
      {showResetModal && (
        <div className="z-100 fixed max-w-md mx-auto inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to reset the game?</p>
            <div className="flex justify-between">
              <Button onClick={resetTimers} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Yes, Reset
              </Button>
              <Button onClick={() => setShowResetModal(false)} className="bg-gray-400 text-white px-4 py-2 rounded-lg">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
