export const getCounter = (picked) => {
  switch (picked[0]) {
    case "rock":
      return { beats: ["scissors", "lizard"], lose: ["paper", "spock"] };
    case "paper":
      return { beats: ["rock", "spock"], lose: ["scissors", "lizard"] };
    case "scissors":
      return { beats: ["paper", "lizard"], lose: ["spock", "rock"] };
    case "spock":
      return { beats: ["scissors", "rock"], lose: ["lizard", "paper"] };
    case "lizard":
      return { beats: ["spock", "paper"], lose: ["rock", "scissors"] };
  }
};
