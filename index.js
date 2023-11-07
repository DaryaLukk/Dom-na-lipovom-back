/* eslint-disable import/no-extraneous-dependencies */
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const { cottages, images, descs } = require('./db_fake/database');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/cottages', async (req, res) => {
  try {
    const data = cottages;
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

app.get('/mimages', async (req, res) => {
  try {
    const data = images;
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

app.get('/mdescriptions', async (req, res) => {
  try {
    const data = descs;
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

app.post('/', async (req, res) => {
  const {
    name, number, date, cottage,
  } = req.body;
  try {
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
    await bot.sendMessage(
      process.env.CHAT_ID,
      `Новая заявка: 
        Имя - ${name} 
        Телефон - ${number} 
        Желаемая дата - ${date} 
        Желаемый дом - ${cottage}`,
    );
    await bot.stopPolling();
    return res.status(200).json({ status: true });
  } catch (e) {
    return res.status(500).json({ status: false, message: e });
  }
});

const { PORT } = process.env;

app.listen(PORT, () => console.log('ПОРТ ПАШЕТ!'));
