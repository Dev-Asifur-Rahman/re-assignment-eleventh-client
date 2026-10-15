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

  const dataColor = [
    "#30d787",
    "#30d787",
    "#30d787",
    "#30d787",
    "#30d787",
    "#30d787",
  ];

  return (
    <section className="flex flex-col lg:flex-row lg:items-center py-3 md:py-5 lg:py-8">
      <div className="lg:h-[400px] md:h-[300px] mx-auto h-[250px] w-full md:w-2/3 lg:w-3/5 md:p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" className="text-yellow-400" tick={{ fontSize: tickFontSize }} />
            {/* {YAxisScreen && <YAxis />} */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="books" maxBarSize={80}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={dataColor[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className=" w-full lg:w-2/5 p-2">
        <p className="md:w-3/4 md:leading-7 mx-auto p-4 lg:p-6 text-center rounded-md lg:rounded-xl bg-library/15 h-full flex items-center md:font-semibold capitalize">
          Discover the story behind our growing library through insightful
          statistics and reading trends. Explore the total number of books,
          available collections, and popular categories. Track borrowing
          activity and see how our collection continues to grow. Every number
          reflects our commitment to making knowledge accessible to everyone.
          Dive into the stats and explore a world of books.
        </p>
      </div>
    </section>
  );
};

export default Statistics;
