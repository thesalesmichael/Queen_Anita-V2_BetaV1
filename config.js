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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lZelpsT3hhUjhualVqWGZCWHlXdUVJaEdxMnAzYVRUUWd3cVFaYXJHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2F5eWp4U0hmejNCby9IN24xbmIvWmVsdE9MdGhBZURzbHhKckwxK0JDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ0FJU00wME5HbzlFU1RjSUMrUitidy9pS2IwMVRQMWptVnc3OEd5N1gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyVzVNQXhrcFgwLzYwcnpLZUxTbTkzY1ZON3NqRjdPRDA1SmlrWlpGTmxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHcTVFLzlwaE9kS3RmbjBMMVJJQ0xCR00zbHJIb0ZQdHZXY3Zua1daVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNSS1F2MDJSVW1GZzRHazR0NUM5bzJPdzVNdjl2dWJ2QUwxT1RVSVVVRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk8xSEoyY1hKRkxFR2Rac1RWeVJaeHJTSDB5bUYxeEpxbkxLUk1KRlRsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3VpaXZRWWQ2dDQwTGpnbGlLZkEzUVdLSGNtWTN5RzN0NkNGV3hML2F5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5rall0T1dKbytxSTlVNjkxaHNiMXAzcGJKTXhObm96Y29xYzlqYlUrT3ZMUHFWK2hHOGg1bk1oQkovMEJacWhncGxybTA4YjZQQmpyME9meHlkY0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiI0aldKYXZ6b2RRWEFwOUk4dW83U2dqTk5FVU1nME9PdHlpTTVJdTlmTmJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqOS12XzR5NVFHRzhINERTQ0FLTFZnIiwicGhvbmVJZCI6IjM5NDE3ZjYyLWY3YTktNDNhYy1iZjkzLThmYjdmZmMwYjRjNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIra0ZCanUrdjlNZ3JicktjYis2QWdSRzRuZlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNURWd0pCa01Oc0crejVNNklhaUs5N0xhTTg4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg4M0dEVDdIIiwibWUiOnsiaWQiOiIyMzQ5MDQ3MjMxNTA3OjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVhc3kgV2VsbG5lc3MgTHRkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMUGozTzRDRUpEUmdyWUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6ZXh3Vk14Wk4zYmFZR0tXb3ZpTzVvK2tuWFd1Lyt3REdjS3l1eDV4alhRPSIsImFjY291bnRTaWduYXR1cmUiOiJZT1NKZitNWTZVdEFiZUZQb1JRRnpSaW9JSi92K2xDSVFuMHBMS1RYOW9mcXVoT2hab0h1SHFlNk8xYk9jeVdNbTZDSkFNYXpRT01OVzU1c004L3FDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWhRR3RCRlA3RGlyQnpxMnNxWkNHVm4zZ3dDK29IYUxiYVVSZE00RnAxRHVRQTh4YzNCMVFrQk5TZVRkZENSZDBvTnYvaEswZzllWCt5WkMyZ1NxRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQ3MjMxNTA3OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMzc2NGVE1XVGQyMm1CaWxxTDRqdWFQcEoxMXJ2L3NBeG5Dc3JzZWNZMTAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM5MDIxMDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVQrIn0="
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
