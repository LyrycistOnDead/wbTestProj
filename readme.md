Установка и запуск:

1. Клонирование репозитория

git clone https://github.com/your_username/wildberries-tariffs.git
cd wildberries-tariffs

2. Настройка .env

# Wildberries API
WILDBERRIES_API_TOKEN= wb_token

# PostgreSQL Database
DB_HOST=db
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=wildberries

# Google Sheets
GOOGLE_SERVICE_ACCOUNT_EMAIL='wb-491@wbtestproject-449312.iam.gserviceaccount.com'
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfWam385yolwHS\naSRPA4d1rJnqFVKXWd5SXLgSXlcIW0IDs15hdO5VbEy5T7hh7HqqAiNoCvD659mi\nMM7gRX+ByidbFs97IRcNjeMm1uFBjkTAikD3Tv7bskV90VtOZqGF2F+D5KauwOuR\nXlITWQfWpVPlUDi4PwYGJ79D5h0cd98tRVbb0xEf8WNy8WzIPTvGtf+P3NWNXX0u\nhUpjCj0ABs5q+YvoNpfCLQ4G8yDjG5Q63mghxrGuwqFBaR/lakrLalp1ed6q9hmW\nqmoJ5Z1Rnis/B3I3g0Yr4zJadYBrN1jUZ/9Yl9rc8/8yHEFzPNk6A1rNvDtLXkF/\n4IJyzmQdAgMBAAECggEAAaTu9aU3oVy3idiIZaFTcUEn8GyqZsHoY6CtzJC5JK6u\nYnPkHizS9cIxk3rxW99RD7aIb38nZ+tjCUOoKtPEwk3X9J5qYyqe/oaPiLvQZLkH\nWBZFH9gqlJFFGsyBfPBdq9AlAismliiK9bvLrIPvawVXNYdLookR8pfP5y81bzEA\nSvzNpZQdk2YEAz1LRl8VmbvSjqx85q7t7AcprtmGGKrc6vw/hiSPj/NOwDDveQ3w\nbaMTOOt9bUGFr+PR/zo87EAWT5hy5ygQK97bmIWLZ/pK0A6ATR82hODBWOZ9vpHD\nujdaqIzDNee5f1UX7p4PRQ0UFz8Di3RWlh7sydN8WQKBgQDOPy4lEXWjsJyiyDSz\nUp3uwgKqP//K0SKlh1uMkT95/xLfFJanecjk0BCQh7nuFJM7nDJzyIID+c/0HyWe\nppBfzsWniy5X8eu/dElzSTarTuf1rCKWvCefmIWaYretgVHl7PXau3DI/Uatx8Lz\n0hP+yxQekalgHEsa4hkb6krDpQKBgQDFymAEH9HezsmqhPRd+Zpj5Tb2GyHRCPO6\nbO14ieHfy+AfeMWxRcvJp63gBGfLLibfvHtc7WS5ic/GoAlwYa8ttlKHT9buUDFQ\naVjuqMf1IBHOGGf8p1wqR4zUAURAe7uBfGCuont7/u7AN341Cb1KcdTG8rA57hoL\nR+/AWIXVGQKBgASXbXyPxfGt9d693EZ9uVxeX1bQ8+3c+At9VvFrLmGV5yKmP7Bc\nyrclVqkRDHebZ6e1E352YUabYiDKLLk6dg5b+RSAybhVf20UtqnlYF0x9YIHogF/\nENbBu3+zYOlw7pTS0Kpc7+bZlKA7yUBKVf2fIcSIc5/bIWTo0axIa/+tAoGBAJuG\nx7tWfgOSXPcttq2SkLlOSsp4iT3CqUwFTTHEUg1VVfXJVMJRXK5DoLCPJkKZFs5F\nekeXD+XpHK1VuDZbSZFLVVe7Cwm3mx9cxyZbJ2hzgCyr+lCsFQfV3UHzgQSnhsiJ\n0chgUXMuAfS5bg8simDYY3TQ7ouO04HdXgPEV/A5AoGAdf7SJ3hY2BAk9R1PiZOo\nlHaYyF4EWaXWVbxqncb/OG0AOCE+KsfZGsQhLGmejlRU+EzJJd8M27Wl8MFS6fQG\nSYeT9WJICmSNDUq8UyttkL72YzRh34ehvhS0mzhCYlv3MUtkJiSlsooQH/plmBsu\nr7gGR5ELWaaAruBePSd90j0=\n-----END PRIVATE KEY-----\n"


# Google Sheets IDs
GOOGLE_SHEET_IDS=sheet1_id,sheet2_id,sheet3_id

3. Запуск Docker

docker-compose up --build

Структура проекта

project/
├── src/
│   ├── api.ts          # Логика работы с API Wildberries
│   ├── database.ts     # Логика работы с базой данных
│   ├── googleSheets.ts # Логика работы с Google Sheets
│   └── index.ts        # Главный файл приложения
├── migrations/         # Миграции для базы данных
├── docker-compose.yml  # Конфигурация Docker
├── .env                # Переменные окружения
├── README.md           # Инструкция по запуску
└── package.json        # Зависимости