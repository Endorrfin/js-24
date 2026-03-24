// Deathmatch Scoreboard System Scaffold

class Scoreboard {
  constructor() {
    // ADDED: Map to store player statistics
    this.players = new Map(); // key: playerName, value: { kills, deaths }
  }

  joinServer(playerName) {
    // TODO: Add player to the scoreboard with 0 kills and 0 deaths
    if (!this.players.has(playerName)) {
      this.players.set(playerName, { kills: 0, deaths: 0 });
    }
  }

  registerKill({ killerName, victimName }) {

    // ADDED: Increment killer's kills
    const killer = this.players.get(killerName);
    if (killer) {
      killer.kills++;
    }


    // ADDED: Increment victim's deaths
    const victim = this.players.get(victimName);
    if (victim) {
      victim.deaths++;
    }
  }

  getTop10() {
    // ADDED: Convert Map to array of [name, stats] pairs
    const playersArray = Array.from(this.players.entries());

    // ADDED: Sort by kills (desc) then by deaths (asc)
    playersArray.sort((a, b) => {
      if (b[1].kills !== a[1].kills) {
        return b[1].kills - a[1].kills; // More kills = higher rank
      }
      return a[1].deaths - b[1].deaths; // Fewer deaths = higher rank
    });

    // ADDED: Return top 10 players with formatted data
    return playersArray.slice(0, 10).map(([name, stats]) => ({
      name,
      kills: stats.kills,
      deaths: stats.deaths,
    }));
  }

}

async function simulateGame(scoreboard) {
  const MAX_PLAYERS = 100;
  const KILLS_TO_SIMULATE = 500;
  // Step 1: Create MAX_PLAYERS players named Player1 to PlayerMAX_PLAYERS
  for (let i = 1; i <= MAX_PLAYERS; i++) {
    scoreboard.joinServer(`Player${i}`);
  }

  // Step 2: Simulate 500 kill events
  for (let i = 0; i < KILLS_TO_SIMULATE; i++) {
    const killer = `Player${Math.ceil(Math.random() * MAX_PLAYERS)}`;
    let victim;
    do {
      victim = `Player${Math.ceil(Math.random() * MAX_PLAYERS)}`;
    } while (victim === killer);

    scoreboard.registerKill({ killerName: killer, victimName: victim });


    console.log(scoreboard.getTop10());
  }
}

// Uncomment below to run simulation
// const scoreboard = new Scoreboard();
// simulateGame(scoreboard);
