import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

const Statistics = () => {
  const [YAxisScreen, setYAxisScreen] = useState(true);
  const [tickFontSize, setTickFontSize] = useState(14);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 425) {
        setYAxisScreen(true);
      } else {
        setYAxisScreen(false);
      }
      if (width <= 320) {
        setTickFontSize(10);
      } else if (width <= 768) {
        setTickFontSize(16);
      } else {
        setTickFontSize(20);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    { name: "Novel", books: 220 },
    { name: "Drama", books: 180 },
    { name: "Sci-Fi", books: 150 },
    { name: "History", books: 130 },
    { name: "Mystery", books: 200 },
    { name: "Thriller", books: 170 },
  ];

  // Custom colors for each bar
  const colors = [
    "#6366F1",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#3B82F6",
    "#FF007D",
  ];

  return (
    <section className="py-3 md:py-5 lg:py-8 lg:h-[500px] md:h-[300px] mx-auto h-[250px] w-full md:w-2/3 lg:w-4/5">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: tickFontSize }} />
          {YAxisScreen && <YAxis />}
          <Tooltip />
          <Legend />
          <Bar dataKey="books">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Statistics;
