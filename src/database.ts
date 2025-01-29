import { Knex } from 'knex';

// Определяем интерфейс для данных, получаемых из API
interface TariffData {
  warehouseId: number;
  coefficient: number;
}

export async function saveTariffsToDatabase(knex: Knex, data: TariffData[]) {
  const formattedData = data.map((item: TariffData) => ({
    date: new Date().toISOString().split('T')[0], // Текущая дата
    warehouse_id: item.warehouseId,
    coefficient: item.coefficient,
  }));

  // Вставка данных в таблицу с обработкой конфликтов
  await knex('daily_tariffs')
    .insert(formattedData)
    .onConflict(['date', 'warehouse_id'])
    .merge();
}