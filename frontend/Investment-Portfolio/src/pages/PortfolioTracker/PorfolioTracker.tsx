import AssetList from "@/components/AssetList/AssetList";
import Navbar from "@/components/LandingPage/Navbar";
import LineGraph from "@/components/LineGraph/LineGraph";
import PieGraph from "@/components/PieGraph/PieGraph";
import TransactionForm from "@/components/TransactionForm/TransactionForm";
import Masonry from "react-responsive-masonry";

import React, { useEffect, useState } from "react";
import axios from "axios";

const dummyData = [
  { name: "HP Inc", symbol: "HPQ", quantity: 10, price: 150000 },
  { name: "IBM", symbol: "IBM", quantity: 10, price: 35000 },
  { name: "Reliance", symbol: "RLC", quantity: 8, price: 1450000 },
];

const PortfolioTracker: React.FC = () => {
  const [data, setData] = useState<any[]>(dummyData);

  const output = [
    <LineGraph assetData={data} />,
    <PieGraph data={data} />,
    <TransactionForm data={data} setData={setData} />,
    <AssetList data={data} />,
  ];

  const fetchData = async () => {
    // ----------------API---------------------------
    // const response = await axios.get("get transactions uri");
    // const data = response.data;
    // setData(data);
  };

  useEffect(() => {
    fetchData();
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
