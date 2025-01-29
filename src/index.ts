import cron from 'node-cron';
import { getTariffs } from './api';
import { saveTariffsToDatabase } from './database';
import { exportToGoogleSheets } from './googleSheets';
import knex from 'knex';
import knexConfig from '../knexfile';
import 'dotenv/config';

const db = knex(knexConfig.development);

cron.schedule('0 * * * *', async () => {
  console.log('Запуск задачи...');
  const tariffs = await getTariffs();
  await saveTariffsToDatabase(db, tariffs);

  const sheetIds = ['sheet1_id', 'sheet2_id', 'sheet3_id'];
  for (const sheetId of sheetIds) {
    await exportToGoogleSheets(sheetId, tariffs);
  }
});