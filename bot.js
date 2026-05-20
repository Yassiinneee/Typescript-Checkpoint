// Import Bolt package
const { App } = require("@slack/bolt");

// Load environment variables
require("dotenv").config();

// Create Slack app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// ---------------------------------------------------
// Listen for messages containing "/hello"
// ---------------------------------------------------
app.message(/\/hello/i, async ({ message, say }) => {
  try {
    // Reply to the user
    await say(`Hello <@${message.user}> 👋`);
  } catch (error) {
    console.error("Error replying:", error);
  }
});

// ---------------------------------------------------
// Log every message received in channels
// ---------------------------------------------------
app.message(async ({ message }) => {
  console.log("New Message Received:");
  console.log(`User: ${message.user}`);
  console.log(`Text: ${message.text}`);
  console.log("----------------------------");
});

// ---------------------------------------------------
// Start the app
// ---------------------------------------------------
(async () => {
  const port = 3000;

  await app.start(port);

  console.log(`⚡ Slack Bot is running on port ${port}`);
})();