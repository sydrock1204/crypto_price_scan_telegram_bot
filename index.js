import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import weather from "./weather/index.js";
import priceScan from "./token/index.js";

const token = "6757294492:AAGitNKXS189XuxLTUJhBFYVqvXKu901czA";

const weatherBaseUrl = "https://api.weatherapi.com/v1/current.json";

const bot = new TelegramBot(token, { polling: true });
const BOT_COMMANDS = [
  { command: "start", description: "Greeting" },
  { command: "eth", description: "bbb" },
];

await bot.setMyCommands(BOT_COMMANDS);

bot.on("message", async (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const message = msg.text;

  if (message == "hello") {
    console.log(chatId);
    bot.sendMessage(chatId, "You are Welcome. What is your problem?");
  } else if (message == "eth price") {
    const priceData = await priceScan();
    bot.sendMessage(chatId, priceData);
  } else if (message == "download") {
    bot.getFile(
      "CQACAgQAAxkBAAES3M5mSxRO1QgVNQ46EDTtOixSqCYQQwACixAAAkgVWVLye1Pb2yTWSTUE"
    );
  }
});
