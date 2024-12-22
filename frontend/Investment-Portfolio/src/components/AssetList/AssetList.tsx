import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import axios from "axios";

interface AssetListProp {
  data: {
    name: string;
    symbol: string;
    quantity: number;
    price: number;
  }[];
}

const AssetList: React.FC<AssetListProp> = ({ data }: { data: any[] }) => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "20px auto",
        padding: 3,
        backgroundColor: "#212121", // Dark background similar to TransactionForm
        border: "1px solid #313131", // Subtle border
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)", // Box shadow for more depth
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          color: "#fff", // Light text color
          borderBottom: "1px solid #313131", // Light separator
          paddingBottom: 1,
          marginBottom: 2,
        }}
      >
        Assets List
      </Typography>

      {data.length !== 0 ? (
        <Grid container spacing={2}>
          {data?.map((asset) => (
            <Grid item xs={12} key={asset.symbol}>
              <Card
                sx={{
                  backgroundColor: "#313131",
                  color: "#fff",
                  border: "1px solid #313131",
                }}
              >
                {" "}
                {/* Dark card background */}
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#fff" }}
                  >
                    {asset.name}
                  </Typography>
                  <Divider sx={{ my: 1, backgroundColor: "#555" }} />
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="body1" color="#eee">
                      Quantity:
                    </Typography>
                    <Typography variant="body1" color="#eee">
                      {asset.quantity}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="body1" color="#eee">
                      Amount:
                    </Typography>
                    <Typography variant="body1" color="#eee">
                      ${asset.price.toLocaleString()}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>Assets will be displayed here.</div>
      )}
    </Box>
  );
};

export default AssetList;
