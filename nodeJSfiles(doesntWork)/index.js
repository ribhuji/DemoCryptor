
const { TelegramClient } = require('messaging-api-telegram');
 
const client = TelegramClient.connect('904163716:AAFsJvnjb6HzXF1VluNbWsoXtielGyMnZq8');

client.sendDocument('660180500', 'https://example.com/doc.gif', {
  caption: 'gooooooodDocument',
  disable_notification: true,
}).then((data) => {console.log(data)}).catch((err) => {console.log('error')});