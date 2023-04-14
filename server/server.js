const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./config/db')
const cors = require('cors')

app.use(cors())

// GET all Exercises
app.get('/exercises/:exerciseName', async (req, res) => {
    const { exerciseName } = req.params
    try {
      const exercises = await pool.query(
        'SELECT * FROM exercises WHERE exercise_name = $1',
        [exerciseName]
      );
      res.json(exercises.rows);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });  

app.get('/', (req,res) => {
    res.send('hello')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))