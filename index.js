

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean room", "Take all the 💩 out of your room");
const task2 = newTask("Do Laundry", "OMG! nooooo!!!");

task1.logState();
task1.markCompleted();
task1.logState();
