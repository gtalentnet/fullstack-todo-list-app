# fullstack-todo-list-app

Example to-do list app created using MERN Stack.

## Estructura del proyecto

```
/backend
  server.js
  package.json
  models/
    Todo.js
/frontend
  package.json
  public/
    index.html
  src/
    index.js
    App.js
    components/
      TodoList.jsx
```

## Scripts

- **Backend**: `npm install && npm start` en el directorio `backend`.
- **Frontend**: `npm install && npm start` en el directorio `frontend`.

Asegúrate de tener una base de datos MongoDB disponible y de definir la variable `MONGODB_URI` en un archivo `.env` dentro de `backend`.
