CREATE DATABASE workoutlogger;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE exercises (
    exercise_id SERIAL PRIMARY KEY,
    exercise_name VARCHAR(100) NOT NULL,
    exercise_description TEXT
);

CREATE TABLE workout_logs (
    log_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    exercise_id INTEGER REFERENCES exercises(exercise_id),
    date DATE NOT NULL,
    sets INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    weight FLOAT
);
