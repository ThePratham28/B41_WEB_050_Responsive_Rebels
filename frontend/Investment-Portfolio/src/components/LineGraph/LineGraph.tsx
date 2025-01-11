import axios from "axios";
import { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
  ResponsiveContainer,
} from "recharts";

// Define types for the data structure

interface LineGraphProps {
  symbol: string;
}

interface HoveredData {
  date: string;
  open: number | null;
}

const securities: Record<string, string> = {
  "HP Inc": "HPQ",
  "ICICI Bank Ltd": "IBN",
  "Goldman Sachs Group Inc": "GS",
  "Airbnb Inc": "ABNB",
  "Dell Technologies Inc": "DELL",
  "Dominos Pizza Inc": "DPZ",
  "Walmart Inc": "WMT",
  "Wipro Ltd": "WIT",
  "PepsiCo Inc": "PEP",
  "IBM Inc": "IBM",
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Get the data from the payload
    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          paddingInline: "6px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          fontSize: "14px",
        }}
      >
        {" "}
        <p style={{ color: "black" }}>{data.x}</p>
        <p
          style={{
            color: data.color === "red" ? "red" : "#55E188",
          }}
        >
          <strong>Trend:</strong>{" "}
          {data.color === "red" ? "Decreasing" : "Increasing"}
        </p>
      </div>
    );
  }

  return null;
};

const LineGraph: React.FC<LineGraphProps> = ({ symbol }) => {
  const [min, setMin] = useState<number | null>(null);
  const [max, setMax] = useState<number | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [hoveredData, setHoveredData] = useState<HoveredData>({
    date: "",
    open: null,
  });
  const [stockName, setStockName] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&outputsize=compactl&apikey=Q4RTLEAXSE12KIAB`
    );
    const res = response?.data;
    const xaxis = Object.keys(res["Time Series (1min)"]);

    const xaxisFiltered = xaxis.filter((_, index) => index % 4 === 0);

    const name = Object.keys(securities).filter(
      (obj) => securities[obj] === symbol
    )[0];

    setStockName(name);

    const data = xaxisFiltered
      .map((key, index) => {
        const currentOpen = parseFloat(
          res["Time Series (1min)"][key]["1. open"]
        );
        const prevOpen =
          index > 0
            ? parseFloat(
                res["Time Series (1min)"][xaxisFiltered[index - 1]]["1. open"]
              )
            : null;

        return {
          x: key, // Time
          y: currentOpen,
          color:
            prevOpen !== null && currentOpen < prevOpen ? "red" : "#55E184",
        };
      })
      .reverse();

    setChartData(data);

    setHoveredData({
      date: "",
      open: data[0]?.y,
    });

    const openValues = data.map((item) => item.y);
    setMin(Math.min(...openValues));
    setMax(Math.max(...openValues));
  };

  useEffect(() => {
    fetchData();
  }, [symbol]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#212121",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        height: "500px",
        border: "1px solid #313131",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "10px",
          fontSize: "22px",
          fontWeight: "bold",
          borderBottom: "1px solid #313131",
        }}
      >
        <h3>Portfolio</h3>
      </div>

      {chartData.length !== 0 ? (
        <div style={{ position: "relative", height: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 10,
              fontSize: "18px",
              backgroundColor: "#212121",
            }}
          >
            <p>
              <strong>Price:</strong> ${hoveredData.open}
              <br />
              <strong>Stock Name:</strong> {stockName}
            </p>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              margin={{
                top: 60,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              data={chartData}
              onMouseMove={(e) => {
                if (e.isTooltipActive) {
                  setHoveredData({
                    date: e.activeLabel as string, // Date (time)
                    open:
                      e.activePayload &&
                      e.activePayload[0].payload.y.toFixed(2), // Open value
                  });
                }
              }}
            >
              <XAxis dataKey="x" hide />
              <YAxis domain={[min! - 10, max! + 10]} hide />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#55E184"
                strokeWidth={2}
                dot={false}
                activeDot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div style={{ margin: "auto", paddingBottom: "44px" }}>
          Add Transaction to explore Portfolio
        </div>
      )}
    </div>
  );
};

export default LineGraph;
