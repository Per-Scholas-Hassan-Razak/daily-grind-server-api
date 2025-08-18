const express = require("express");
const axios = require("axios");

const app = express();

const port = 3000;

const API_ENDPOINT = "https://uselessfacts.jsph.pl/api/v2/facts/random";

app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    res.json(
     { fact: response.data.text}
    )
  } catch (error) {
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
