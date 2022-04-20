import Head from "next/head";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import axios from "axios";
import CarsList from "../components/CarsList";
import Nearley from "nearley";
import Grammer from "../parser/filter";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [isValidInput, setValidInput] = useState(true);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    axios.get("/api/cars").then((res) => {
      setCars(res.data);
    });
  }, []);

  const filterCars = () => {
    if (isValidInput === true) {
      // console.log(parsedData);
      // console.log(parsedData.join("").replace(/,/g, ""));
      var splittedValue = filterText.split(" ");
      if (splittedValue && splittedValue[0].toLowerCase() === "brand") {
        console.log(splittedValue[2].replace('/"/g', "").toLowerCase());
        setCars(
          cars.filter(
            (item) =>
              item.brand.toLowerCase() ===
              splittedValue[2].replace(/['"]+/g, "").toLowerCase()
          )
        );
      }
    }
  };

  const validateInput = (element) => {
    var value = element.target.value.trim();

    if (value === "") {
      setValidInput(true);
    } else {
      try {
        const parser = new Nearley.Parser(
          Nearley.Grammar.fromCompiled(Grammer)
        );
        parser.feed(value);

        var parsedData = parser.results;

        if (parsedData && parsedData.length === 0) setValidInput(false);
        else if (
          parsedData &&
          parsedData.length > 0 &&
          parsedData[0] &&
          parsedData[0].length > 0
        ) {
          setValidInput(true);
          setFilterText(value);
        }
      } catch (ex) {
        setValidInput(false);
        console.log(ex);
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Nearley parser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="text-4xl text-gray-300 text-center" data-test="heading">
        Cars
      </p>

      <div className="border-2 rounded-lg m-6 p-6 text-center">
        <div className="flex flex-row mx-auto md:w-1/2 border rounded-lg">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            size="small"
            placeholder="Brand, Car name, Vehicle type, Fuel type..."
            onInput={validateInput}
            data-test="nearley-input"
          />
          {isValidInput ? (
            <>
              <Divider sx={{ height: 34, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                onClick={filterCars}
                data-test="check-btn"
              >
                <CheckIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Divider sx={{ height: 34, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="warning"
                sx={{ p: "10px", fontSize: "0px" }}
                data-test="close-btn"
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
        </div>
        <div className="p-2 mt-4">
          {cars.length === 0 ? "loading..." : <CarsList cars={cars} />}
        </div>
      </div>
    </div>
  );
}
