 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXXOqSBT8L/OquYKggFWpWgRFUfADRGXrPozDgCOfDiBgKv99i5hU8rA3m+VpamD69HT3ObyAJCU5XuAGjF5ARskNFrhdFk2GwQiMS9/HFHSBBwsIRgDKQVS6AmMuazL0LsxR0pcwcGeGhTq4XJnqVlyuDxfu7jDP4LULsvIUEfQNYHPfx2fSOXZUUZqWtmAMzPrAHVHEjcVmEnt0xvLVnTSK1QK2iJBQkgST7IxjTGG0wM0aEvoz+v1JJawYpqq5SyPbt4s7aNZxcqTqorOR6DDsmbuek9WO6Rg/oz+vOgtNyfRVX0rFQ6b2jTW9zeA+5BOyQ0voTCQ2ci6DjRo+6OckSLA393BSkKL5se6W1rBaFN/PJzYw0lpP1qkXb0pmEh3pHOfHdeirau/iUm33M+KTc8/flLVzJKTP0vw8tvi8j/tiX0mEnW4cpF3hlrVyO7LHr8TX9CMr4f/RPV80U2m3JIsp5XrKxFFOHI/RvXO19B0O8t3RDGXvrtQcc/wZfa9GnZCpqFF5dqlFyB7E2d3WTeuom2mn5neH7VaQNCfabz7pw6Kk37EcTDitXl9nrl1YAsqmB71zZNkT1MPDwQ0n+Z25yHJHFvEiWF/6qYgjx95Iit4bonglM0OWZo05wXe/aq7X2NG356Eoy89vNwpxM/fAiH3tAooDkhcUFiRN2j2R7wLo3SyMKC7e1AW3eT3NmBN1GdsWktyJE/HM6aGytUt9UZJ4VpeTVbqqhCnzDLogoynCeY69GcmLlDYGznMY4ByM/v7dBQmui4dvbTWO7QKf0LzYJWUWpdD7MPXjJUQoLZPCahKktAtMwYj53MZFQZIgb2UsE0jRmdywcoZFDkY+jHL82gUevhGEWzywMuRwEoiBPdWWlTI3VDTNs6ClfE6TxycMxkPfg/CpL57EJ97n/ScJ+uIT47MMYgeIhScJdAF5b5n2zB8ddM/bzbTpIYZE1VrIV5fNcYycueTx1ZsLD+kxxR4YFbTEXXCCKCwzOw1x8g1uhoyoGUfWPutfdldkrViXadJl0HE3X3AfloLRy+eYUlKvxbNcm9UH3BB0QfyWQNLevD/gBb4/FHiWE0Z9/q/8V9UKCbPsV4KLFvdd9PaEhwtIohyMgGIcFMlA04k5XDNCqmlyHshKIINPkz7C/kiTt+bukbDjOp5WrrY09Bs9S/rXAecskJYgV126O1zPhwaZP/8LCBgB87wkt5UcbrbSLu5wmMeChKtAMXzflG6QXVamttiEaeIypjXdpyf1JMmiuORduNZ8Z3O/eZ5ZDhm0mshWyFWMuvfUzXNb7RGWr8XmE3Vz9nMVM1yM5vz4LF7mdaKpA6rh037aOYuWnq2nMts5rASErkObenuXuTGQBOIA1nvJcQ+oFu4XP0wsS7QEqqnVow3fxkD0Pn7JW4e8vEfLJ/htmiWwtei/zPmacua1+wXjfT7+IUnjgy2JA8yavWRLLyEczEQCXelaeqyVjDNO2zR9Z5Zbq8ucgNfX312QRbDwUxq3f9/EoynxQBdEMC/kz0a1SYzzAsYZGLECxw0ZiR9wXRA3cpZZBSw++hvI7bPwbPD6DzdMnjT6BwAA',

////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "TALKDROVE",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "923072380380",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
