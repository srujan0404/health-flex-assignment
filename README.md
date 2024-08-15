# React Comment System

This project is a React-based comment system that allows users to create, edit, reply to, and delete comments. It's built using React, Zustand for state management, and Tailwind CSS for styling.

## Features

- Create new comments
- Reply to existing comments
- Edit comments and replies
- Delete comments and replies
- Sort comments by newest or oldest
- Persistent storage using localStorage

## Technologies Used

- React
- Vite
- Zustand
- Tailwind CSS
- ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## Project Structure

- `src/App.jsx`: Main application component
- `src/Components/`: React components for comments, replies, and comment list
- `src/Forms/`: Form components for creating comments and replies
- `src/store/`: Zustand store for state management
- `src/utils/`: Utility functions

## Key Components

### Comment

The Comment component (`src/Components/Comment.jsx`) handles the display and functionality of individual comments:


### CommentList

The CommentList component (`src/Components/CommentList.jsx`) manages the list of comments and provides sorting functionality:


### CommentList

The CommentList component (`src/Components/CommentList.jsx`) manages the list of comments and provides sorting functionality:


## Styling

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`.

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
