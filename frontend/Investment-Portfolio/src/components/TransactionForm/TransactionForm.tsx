import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface ITransactionForm {
  data: {
    name: string;
    symbol: string;
    quantity: number;
    price: number;
  }[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

// Define types for form data
interface FormData {
  security: string;
  quantity: string;
  name: string;
  totalAmount: number;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
});

const TransactionForm: React.FC<ITransactionForm> = ({
  data,
  setData,
}: ITransactionForm) => {
  const [formData, setFormData] = useState<FormData>({
    security: "",
    quantity: "",
    name: "",
    totalAmount: 0,
  });

  const amountRef = useRef<HTMLInputElement | null>(null);
  const [openingPrice, setOpeningPrice] = useState<number>(0);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = {
        ...prev,
        [name]: value,
      };

      if (name === "security") {
        updatedFormData.name =
          Object.keys(securities).find((key) => securities[key] === value) ||
          "";
      }

      if (name === "quantity") {
        const parsedQuantity = parseFloat(value) || 0;
        updatedFormData.totalAmount = parsedQuantity * openingPrice;
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // -----------------API--------------------
    // const res = await axios.post("mongoDb url", {
    //   symbol: formData.security,
    //   name: formData.name,
    //   quantity: formData.quantity,
    //   price: formData.totalAmount,
    // });
    // setData([...data, res])

    setFormData({ security: "", quantity: "", name: "", totalAmount: 0 });
  };

  const fetchOpeningPrice = async (symbol: string) => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&outputsize=50&apikey=KQ4NB0FIC6HRTTJS`
      );

      const latest = Object.keys(response.data["Time Series (60min)"])[0];
      const data = parseFloat(
        response.data["Time Series (60min)"][latest]["1. open"]
      );

      setOpeningPrice(data);

      const parsedQuantity = parseFloat(amountRef.current?.value || "0") || 0;
      const totalAmount = parsedQuantity * data;

      setFormData((prev) => ({ ...prev, totalAmount }));
    } catch (error) {
      console.error("Error fetching opening price:", error);
    }
  };

  useEffect(() => {
    if (!formData.security) return;
    fetchOpeningPrice(formData.security);
  }, [formData.security]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: "100%",
          margin: "20px auto",
          padding: 3,
          paddingTop: 2,
          border: "1px solid #313131",
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          backgroundColor: "#212121",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            marginBottom: "12px",
            padding: 4,
            fontWeight: "bold",
            borderBottom: "1px solid #313131",
          }}
        >
          <h3>Add Transaction</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="security-label">Add Security</InputLabel>
            <Select
              labelId="security-label"
              name="security"
              value={formData.security}
              onChange={(e) => handleChange(e as SelectChangeEvent<string>)}
            >
              <MenuItem value="" disabled>
                Select security
              </MenuItem>
              {Object.entries(securities).map(([key, value]) => (
                <MenuItem key={value} value={value}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Quantity"
            type="number"
            name="quantity"
            inputRef={amountRef}
            placeholder="e.g., 10"
            value={formData.quantity}
            onChange={(e) =>
              handleChange(e as React.ChangeEvent<HTMLInputElement>)
            }
            sx={{ mb: 2 }}
          />

          <Box
            sx={{
              mb: 2,
              p: 2,
              backgroundColor: "#333",
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="body1" color="text.primary">
              <strong>Total Amount:</strong> ${formData.totalAmount.toFixed(2)}
            </Typography>
          </Box>

          <Box
            sx={{
              mb: 2,
              p: 2,
              backgroundColor: "#424242",
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              <strong>Selected Security:</strong> {formData.name || "None"}
            </Typography>
          </Box>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Add Transaction
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default TransactionForm;
