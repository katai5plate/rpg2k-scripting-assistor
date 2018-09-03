const EventCommand = function () {
  return {
    variable: [],
    scripts: [],
    declareVariable: function (names) {
      for (let name of names) {
        this.variable.push({ name })
      }
    },
  }
};

(() => {
  const cmd = new EventCommand();
  cmd.declareVariable(["i"]);
  console.log(cmd);
})()