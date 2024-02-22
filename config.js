const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("254704184518")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://malikmd:malikmd@cluster0.bfc7ce9.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'king-md.db' // add your username
global.sudo = process.env.SUDO || '923124533358'
global.devs = '923124533358';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZKc1p3WmFqeThzNEJQV01wcXlSVHVEZk9TZ3hXcVcvRUhtWVo2NlNtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjF4dWtBSzNnZVVoSnBwcVB3RU00aE5QRElBSEt3M3pWd2lGQm1raHpUST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SXE3UE1SZEdGcklrRGlrK1JYbDF5WW9HR2dKWHFMaktURDhIU25GaTE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ZDRWc3I5MjBGRE9VTHVnc2FUcEpuUVNPNnVDSUxLOHB1ZkpuMTZUbXlnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIcWpjZjdXYit0SE1HRkJqdU5QSE9SMVVQaVVxcGJJMnJTdlAyRk0wVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUrdzBWaVJEc21qTVBOaFpLVEpmRGVXNHJhZjd5N1RrcXFxU2c0L2lFMzA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaSUZscGlJZ0dLdVlCbCs0bjd6L3orUmRFTUh2VktOOFlmWXA1N0NKdlhDUzFkUmFWNTBpVlB6aHpSMHhsZGJHVFg3M2VGcGRndk4ySE1OWVNPL2doUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwMSwiYWR2U2VjcmV0S2V5IjoicFZmblRBeklqeVFVcUpQY1B3QTAvek1XU0o2UDI4c1g4UjdNaVJ2NXVzZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiclJadkJ4ZEtSOUNwTUNfTHFCOHB3USIsInBob25lSWQiOiI4YTUzNzczYS04ODdlLTQwYzQtOGUzOC1jMTFmYmMzN2NlZTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2gxeFdEY3AxU3NOZjZUUW5ORzNNWkY5Sm5vPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWTN0UmlHZzZwa2MvT2NqMFBRcytoS0VYOTA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMNnZ0cTRHRUkzUzI2NEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlR2JrRHJQQ0ZjbUVVb3hudGRManNrMW1Ea29IbkhaZ0VHWW9JWHA5NDFJPSIsImFjY291bnRTaWduYXR1cmUiOiI0RDFacUxEWHNWekVMZzExWFZQVEM2SEI1aHRPSm1ZMWpYZkdOOG1HZmNVVkoxZTZienNYK3NneHYwUVhBZ3dETW52QWtBWUIxKzhHT2M5aWk2N0JCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWXZKL2RZbVN6WUZmdDRGN0tKNWY3SmQyK05CWUZrOVAxM3VwdlcyTkNHZmhWOFBzZURrN2poMmFXU2lFSlZnYUIvRVhueXl4UDhPUVNXcGpCc1BPZ3c9PSJ9LCJtZSI6eyJpZCI6IjI1NDcwNDE4NDUxODo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsZWNreSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDQxODQ1MTg6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYaG01QTZ6d2hYSmhGS01aN1hTNDdKTlpnNUtCNXgyWUJCbUtDRjZmZU5TIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA4NTgzMTg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg1bSJ9",
  botname:   process.env.BOT_NAME === undefined ? 'MALIK-BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'juicy254' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? true : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '0' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '.hello' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
