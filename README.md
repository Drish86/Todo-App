# ToDo List

# Goal

Build a dynamic web application to manage task list.

# Description & constraints

## Frontend

- Application is Single-Page-Application
- Application should run in browser
- No external frameworks are to be used

## Backend

- No restrictions

# Phases

## Phase 1

Build a ToDo List application which can run without server.

- Application will consist only of `index.html` file
- Application has the following features:

  - A table showing all the tasks for the given person
  - Each task should consist of:
    - Title
    - Description
    - Status (completed or not completed, yes or no or whatever else you choose)
    - Entry date
    - End date
    - Priority (High, Medium, Low)
    - Owner (user)
  - A table should always show the following columns:
    - Row number
    - Title
    - End date
    - Priority in form of a colored circle
    - Status
  - Task description will be shown only when user clicks on the specific row (or just on mouse over -> e.g. title attribute)
  - Hide description
  - Tasks should be ordered by the End date in ascending order
  - Ability to change person (when the person changes, task table is updated)
  - Task counter showing the number of:

    - All tasks
    - Completed tasks

    Task counters are updated when person is changed

  - Add new task
  - Delete existing task
  - Update existing task
  - Mark task as completed
  - When task is marked as completed a checkmark will be placed in the Completed column of the given task
  - Task can also be marked as incomplete again after completion (removes checkmark)
  - When the task is added, updated or deleted an appropriate message will be displayed
  - Task can only be edited while in incomplete status

## Phase 2

Replace all static data with data received from the backend API.

- Design and build backend API using NodeJS Express framework.
- Connect Frontent and Backend

## Phase 3

Application ergonomy and design.

- Application should be responsive
- Application should be visually appealing
