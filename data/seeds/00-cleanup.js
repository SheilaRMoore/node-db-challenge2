
exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "Go To Work",
      description: "Make the Bacon",
      completed: true
    },
    {
      id: 2,
      name: "Go to School",
      description: "Allow Your Brain to Grow",
      completed: false
    },
    {
      id: 3,
      name: "Sleep",
      description: "Count Sheep",
      completed: false
    }
  ]);
};