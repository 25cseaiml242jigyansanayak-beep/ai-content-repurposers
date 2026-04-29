const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Fallback AI (no API, always works)
app.post("/generate", (req, res) => {
  const input = req.body.text;

  res.json([
    {
      generated_text:
        "LinkedIn:\n" + input +
        "\n\nTwitter:\n" + input +
        "\n\nScript:\n" + input
    }
  ]);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});