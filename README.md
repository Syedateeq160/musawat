# Musawat Game

This is an interactive legal game designed to educate users about workplace harassment laws in Pakistan, specifically under the Protection Against Harassment of Women at the Workplace Act 2010, including the 2022 amendment.
Players step into the role of a lawyer to guide Sara, a character seeking help, through the intricacies of these laws. The game challenges users with legal puzzles and scenarios to test their knowledge.

## Setting up the development environment

First, fork this repository.  
Clone your forked version.  
Run the following command on the CLI in the root directory of the project:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) on your browser to see the result.

### Updating quiz questions

All game questions can be found in the `pages/api` folder and can be accessed at [http://localhost:3000/api/quiz](http://localhost:3000/api/quiz). This endpoint can be edited in `pages/api/quiz.ts`.

## Live Demo
[Musawat Game](http://musawat-game-rida.vercel.app/)


