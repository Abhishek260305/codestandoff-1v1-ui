# 1v1 UI

1v1 competitive coding micro-frontend application for CodeStandoff 2.0.

## Overview

This application provides 1v1 challenge functionality including:
- Matchmaking system
- Real-time competitive coding
- Match history
- Leaderboards

## Tech Stack

- Next.js 14 with TypeScript
- Tailwind CSS
- Module Federation (@module-federation/nextjs-mf)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on http://localhost:3003

### Building for Production

```bash
npm run build
npm start
```

## Module Federation

This application exposes the `OneVOne` component via Module Federation, which can be consumed by the host application.

## Repository

https://github.com/Abhishek260305/codestandoff-1v1-ui

