const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch('/api/workouts');
    } catch (err) {
      console.log(err);
    }
    if (res.length > 0)
    {
      const json = await res.json();
      const last = json[json.length - 1];
  
      // Add on the totalDuration
      last.totalDuration = last.exercises.reduce((total, el) => total + el.duration, 0);
  
      return last;
    }
    return null;
  },

  async addExercise(data) {
    let id = location.search.split('=')[1];

    if (id === 'undefined')
    {
      id = await this.getLastWorkout()._id;
    }

    const res = await fetch('/api/workouts/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  async createWorkout(data = {}) {
    const res = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  }
};