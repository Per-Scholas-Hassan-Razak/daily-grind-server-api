const express = require("express");
const axios = require("axios");

const app = express();

const port = 3000;

const API_ENDPOINT = "https://uselessfacts.jsph.pl/api/v2/facts/random";

app.get("/api/fun-fact", async (req, res) => {
  try {
    const resp = await axios.get(API_ENDPOINT);
    res.json(resp.data.text);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});


app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
