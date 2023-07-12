import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { motion, useAnimation } from "framer-motion";
import Confetti from "react-confetti";

const TaskPieChart = ({ tasks }) => {
  const [pieChartData, setPieChartData] = useState([]);
  const pieChartControls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const incompleteTasks = tasks.filter((task) => !task.isCompleted);
    const data = incompleteTasks.map((task) => ({
      title: task.title,
      value: 1,
      color: getRandomColor(),
    }));

    setPieChartData(data);
  }, [tasks]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const spinPieChart = async () => {
    if (tasks.length === 0) {
      setIsModalOpen(true);
      return;
    }

    await pieChartControls.start({
      rotate: 720,
      transition: { duration: 3, ease: "easeInOut" },
    });

    const selectedSliceIndex = Math.floor(Math.random() * pieChartData.length);
    const selectedValue = pieChartData[selectedSliceIndex].title;
    setSelectedValue(selectedValue);
    setIsModalOpen(true);
    setShowConfetti(true);

    await pieChartControls.start({
      rotate: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedValue("");
    setShowConfetti(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={spinPieChart}
      >
        Spin the wheel
      </button>
      <div className="w-full lg:w-1/3 h-1/3">
        <motion.div
          animate={pieChartControls}
          style={{ height: "100%", width: "100%" }}
        >
          <PieChart
            data={pieChartData}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={{
              fontSize: "4px",
              fontFamily: "sans-serif",
            }}
            style={{ height: "100%", width: "100%" }}
          />
        </motion.div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={closeModal}
          ></div>
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={true}
              numberOfPieces={200}
              gravity={0.1}
              tweenDuration={5000}
              friction={0.99}
              wind={0}
            />
          )}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Result</h2>
            <p className="text-lg mb-2">{selectedValue}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPieChart;
