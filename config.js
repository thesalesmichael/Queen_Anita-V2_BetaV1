//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349047231507";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERmUnk1Y3Y3RjNKN3RUdHNTVC9tbGlwZEtYWXo5NlQxQkdFSlRIVnVHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjNqTkRMM2gzQ2cxQkwyVytqQ3UyK05aK1BTMXBFbUFTblNMOTVTVlh6bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R2pmQ3VhWHhTdHJyVUg3MGcwVkp5ZGRsWENXdUFRMnVMemdDSm84d2tzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZMDdmeHZLMTlNQ25MN3ROUDhrVjQ1YWRZZW0vMHNNL3RHRFZQeElqbXlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9NWXBRcklGSXVXNTlhVXNNZHpxaEoybHRkNERMcldoMkhObGVxN055MDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw2TnJuL0h0TmQreWJnbytZODhrYy9RL1RrSzNZVE5Fbkora1g2ZWlFRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUp2b3pCaEVNT0s3ZjB2bTN6T2x5dXdtSVhxemRnN0swK0h3T0ZYYktXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN25xdTdsbGt2V00reHI0bXJwSUlucU5xaEc4ME0xaFRsRm5zclNUaFpBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc0Wk5EaFhobkt3bFVSTUJLV0RQVEc3OUdTTmRhZUt4aWZOZmZ3TW9HVlluUHZtZXlGQkhxWlIwSStMWVkvMnFUek5peTlxSDJLcUtTWGpvZlorSERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJNWkl3T2NUaWJjbmFjTGFzeC9PcXI1MmYvQjVkL2ozNGpDdDdTWGRVUGRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuRVZrRVF5Q1RQT0pkeDlHNjg1MEtBIiwicGhvbmVJZCI6ImNlNWE2ZWFiLWE2ZDctNGEzZS04OTBhLTQxNzMyZWZjNGU5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNa3cwU2t3MTJKR1FvbVhwajEwcG9TRDhhRnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamgvRXFNcW1UM1RYSkJ6dDYyYnREU2xIanVVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFTSjY0WVRBIiwibWUiOnsiaWQiOiIyMzQ5MDQ3MjMxNTA3OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVhc3kgV2VsbG5lc3MgTHRkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMUGozTzRDRUlDL2dyWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6ZXh3Vk14Wk4zYmFZR0tXb3ZpTzVvK2tuWFd1Lyt3REdjS3l1eDV4alhRPSIsImFjY291bnRTaWduYXR1cmUiOiIyZ3VsU1Q3R0tqemk3Z1BWVjdzUk1kSjNmeXl3YWNLQ1dYa1RzTmh5QXBnL3ErY0xuNlRSdmUva0UxS1RCMHhIVUJDb3AyYWxtd0ZYWGNUd3kxRjVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia213NC9Wc01vbmVLMmFCK255WWRieURQaGIvSWNVMzRYNmpRUmU0VUFPMFRpcWlOZW5yTkM0QldGYVF4enphR3l5T0NwbG9iQjVxRGk4UjkvS1JiQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQ3MjMxNTA3OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMzc2NGVE1XVGQyMm1CaWxxTDRqdWFQcEoxMXJ2L3NBeG5Dc3JzZWNZMTAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4OTk3OTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVQ5In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
