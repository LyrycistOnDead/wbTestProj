import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function exportToGoogleSheets(sheetId: string, data: any[]) {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!serviceAccountEmail || !privateKey) {
    throw new Error('Google credentials are not defined in .env file');
  }

  const auth = new JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(sheetId, auth);

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle['stocks_coefs'];

  if (!sheet) {
    throw new Error('Sheet "stocks_coefs" not found');
  }

  await sheet.clear();
  await sheet.addRows(data);
}