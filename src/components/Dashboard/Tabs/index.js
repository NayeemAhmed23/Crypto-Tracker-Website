import React, { useState } from "react";
import "./styles.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid";
import List from "../List";

export default function TabsComponent({ coins, setSearch }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
          <TabPanel value="grid">
            <div className="grid-flex">
              {coins.length > 0 ? (
                coins.map((coin, i) => {
                  return <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />;
                })
              ) : (
                <div>
                  <h1 style={{ textAlign: "center" }}>
                    Sorry, Couldn't find the coin you're looking for 😞
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "2rem",
                    }}
                  >
                    <Button text="Clear Search" onClick={() => setSearch("")} />
                  </div>
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel value="list">
            <table className="list-table">
              {coins.length > 0 ? (
                coins.map((item, i) => {
                  return <List coin={item} key={i} delay={(i % 8) * 0.2} />;
                })
              ) : (
                <div>
                  <h1 style={{ textAlign: "center" }}>
                    Sorry, Couldn't find the coin you're looking for 😞
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "2rem",
                    }}
                  >
                    <Button text="Clear Search" onClick={() => setSearch("")} />
                  </div>
                </div>
              )}
            </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}
