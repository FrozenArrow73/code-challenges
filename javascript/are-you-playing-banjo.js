function areYouPlayingBanjo(name) {
    const letters = name.split("")
    if (letters[0] === "r" || letters[0] === "R") {
      return name + " plays banjo"
    } else {
      return name + " does not play banjo"
    }
  }