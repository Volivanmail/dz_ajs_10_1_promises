import GameSavingLoader from './gamesavingloader';

GameSavingLoader.load()
  .then(
    (saving) => {
      console.log(saving);
    },
    (error) => {
      throw new Error(error);
    },
  );
