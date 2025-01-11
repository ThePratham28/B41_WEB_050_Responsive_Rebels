import AssetList from "@/components/AssetList/AssetList";
import Navbar from "@/components/LandingPage/Navbar";
import LineGraph from "@/components/LineGraph/LineGraph";
import PieGraph from "@/components/PieGraph/PieGraph";
import TransactionForm from "@/components/TransactionForm/TransactionForm";
import Masonry from "react-responsive-masonry";

import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios.js";

const dummyData = [
  { name: "IBM", symbol: "IBM", quantity: 100, price: 22400 },
  { name: "HP Inc", symbol: "HPQ", quantity: 5, price: 150000 },
  { name: "Dominos Pizza Inc", symbol: "DPZ", quantity: 80, price: 34080 },
  { name: "Walmart", symbol: "WMT", quantity: 500, price: 46250 },
  {
    name: "Dell Technologies Inc",
    symbol: "DELL",
    quantity: 55,
    price: 63800,
  },
];

const PortfolioTracker: React.FC = () => {
  const [data, setData] = useState<any[]>(dummyData);
  const [symbol, setSymbol] = useState<string>("");
  const output = [
    <LineGraph symbol={symbol} />,
    <PieGraph data={data} />,
    <TransactionForm data={data} setData={setData} />,
    <AssetList data={data} setSymbol={setSymbol} />,
  ];

  const fetchData = async () => {
    // ----------------API---------------------------
    const response = await axiosInstance.get("/transaction");
    const data = response.data.transaction;
    setData(data);
  };

  useEffect(() => {
    fetchData();
    const sym = data[0]?.symbol;
    setSymbol(sym);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: "16px" }}>
        <Masonry columnsCount={2} gutter="16px">
          {output.map((out, i) => (
            <div key={i} style={{ width: "100%", display: "block" }}>
              {out}
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default PortfolioTracker;
