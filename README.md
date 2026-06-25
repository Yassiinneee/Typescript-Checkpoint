# 🤖 Slack Bot with Node.js & Slack Bolt

A simple Slack Bot built using Node.js, Slack Bolt Framework, and dotenv.

This project demonstrates how to create a Slack application that listens for messages, responds to specific commands, and logs incoming messages in real time.

---

# 📌 Project Overview

The Slack Bot is connected to a Slack Workspace through the Slack API and uses the Bolt framework to handle events.

### Features

- Responds automatically to `/hello`
- Logs incoming messages to the console
- Uses environment variables for security
- Real-time communication with Slack
- Easy to extend with additional commands

---

# 📂 Project Structure

```bash
Typescript-Checkpoint-main/
│
├── bot.js
├── package.json
├── package-lock.json
│
├── Slack keys.png
├── Slackbot-invite.png
├── execution.png
│
└── .gitignore
```

---

# 🛠 Technologies Used

- Node.js
- JavaScript (CommonJS)
- Slack Bolt SDK
- Slack API
- dotenv

---

# 📦 Dependencies

## @slack/bolt

Official Slack framework used to build Slack applications.

```json
"@slack/bolt": "^4.7.2"
```

## dotenv

Used to load environment variables securely.

```json
"dotenv": "^17.4.2"
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/your-username/slack-bot.git
cd slack-bot
```

## Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the project root:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_SIGNING_SECRET=your-signing-secret
```

---

# 🔧 Slack App Setup

1. Go to Slack Developer Portal.
2. Create a new Slack App.
3. Enable Bot Permissions.
4. Generate:
   - Bot User OAuth Token
   - Signing Secret
5. Add credentials to `.env`.
6. Install the app to your Slack Workspace.
7. Invite the bot to your channel.

---

# 🚀 Running the Application

Start the bot using:

```bash
node bot.js
```

Expected output:

```bash
⚡ Slack Bot is running on port 3000
```

---

# 🧠 Code Explanation

## Import Dependencies

```javascript
const { App } = require("@slack/bolt");
require("dotenv").config();
```

These lines import the Slack Bolt framework and load environment variables.

---

## Create the Slack Application

```javascript
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});
```

This initializes the Slack application using credentials stored in the `.env` file.

---

## Listen for the /hello Command

```javascript
app.message(/\/hello/i, async ({ message, say }) => {
  await say(`Hello <@${message.user}> 👋`);
});
```

The bot listens for messages containing `/hello`.

Examples:

```text
/hello
/HELLO
/Hello
```

When detected, the bot responds:

```text
Hello @username 👋
```

---

## Log Incoming Messages

```javascript
app.message(async ({ message }) => {
  console.log("New Message Received:");
  console.log(`User: ${message.user}`);
  console.log(`Text: ${message.text}`);
  console.log("----------------------------");
});
```

This listener logs every message received in Slack channels.

Example:

```bash
New Message Received:
User: U123456
Text: Hello everyone
----------------------------
```

---

## Start the Server

```javascript
const port = 3000;
await app.start(port);
```

The application starts a local server on port 3000.

---

# 🔄 Application Workflow

```text
User Sends Message
        │
        ▼
 Slack Workspace
        │
        ▼
    Slack API
        │
        ▼
 Bolt Application
        │
 ┌──────┴──────┐
 │             │
 ▼             ▼
/hello Match   Log Message
 │             │
 ▼             ▼
Send Reply   Console Output
```

---

# 📸 Screenshots

The project includes the following screenshots:

### Slack Keys

Shows the Slack application credentials and configuration.

```text
Slack keys.png
```

### Bot Invitation

Shows the Slack Bot invitation process.

```text
Slackbot-invite.png
```

### Execution

Displays successful bot execution.

```text
execution.png
```

---

# 🧪 Example Usage

### User Message

```text
/hello
```

### Bot Response

```text
Hello @username 👋
```

---

# 🔒 Security Best Practices

Never commit credentials to GitHub.

Store secrets inside the `.env` file:

```env
SLACK_BOT_TOKEN=your_token
SLACK_SIGNING_SECRET=your_secret
```

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
```

---

# 🎓 Learning Objectives

Through this project you will learn:

- Slack Bot Development
- Slack API Integration
- Bolt Framework
- Event-Driven Programming
- Environment Variable Management
- Real-Time Message Handling
- Node.js Application Development

---

# 🚀 Future Enhancements

Possible improvements include:

- Slash Commands
- Interactive Buttons
- Message Reactions
- AI Integration
- Database Support
- User Authentication
- Analytics Dashboard
- Moderation Tools
- Cloud Deployment

---

# 👨‍💻 Author
Yassine Kalthoum

Developed as part of the TypeScript Checkpoint Project to demonstrate Slack Bot development using Node.js and the Slack Bolt Framework.

---

# 📄 License

This project is intended for educational purposes.

MIT License © 2026
