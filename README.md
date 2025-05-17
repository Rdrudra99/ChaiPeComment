# ChaiPeComment: AI-Powered Comment Suggestions

ChaiPeComment is a powerful Chrome extension that helps users craft thoughtful comments for posts across social media platforms with just a click.

## Features

- 🤖 **AI-Powered Suggestions**: Get intelligent comment ideas based on post content
- 💬 **Multiple Comment Types**: Choose from insightful, supportive, witty, thoughtful, and more
- 🌐 **Cross-Platform Support**: Works on LinkedIn, Twitter/X, Facebook, Instagram, and more
- ⚡ **One-Click Suggestions**: Generate relevant comments instantly
- 🔒 **Privacy-Focused**: Your data never leaves your browser

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Prettier
- ESLint
- ShadCN UI
- Plasmo Framework

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, install packages:

```bash
pnpm i
# or
npm i
```

Then, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

## How It Works

ChaiPeComment analyzes post content and suggests contextually relevant comments across several categories:

- **Insightful**: Thoughtful responses that add value
- **Supportive**: Encouraging and positive feedback
- **Professional**: Business-appropriate comments
- **Humorous**: Light-hearted and witty replies
- **Congratulatory**: Celebrate achievements and milestones

Simply click the ChaiPeComment icon when viewing a post, select your preferred comment style, and choose from several AI-generated suggestions.

## Making a Production Build

Run the following:

```bash
pnpm build
# or
npm run build
```

This creates a production bundle ready to be published to the Chrome Web Store!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT