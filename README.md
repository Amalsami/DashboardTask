# Housing Units and Population Density Dashboard

This project showcases a responsive dashboard displaying housing units and population density data in Egypt. It incorporates routing for different data views, filters by entities, and reusable charts and tables to display and update data based on filters. Two contexts manage the data of housing units and population density separately, using JSON Server for data storage.

## Features

- **Enhanced Visualization**: Implement more sophisticated chart visualizations for data analysis.
- **Data Update Mechanism**: Include a mechanism for real-time data updates.
- **Responsive Routing**: Utilizes React Router for responsive navigation across different data views.
- **Filtering by Entities**: Allows users to filter data by entities to view specific information.
- **Reusable Charts and Tables**: Implements reusable components for charts and tables, updating data based on filters.
- **Separate Contexts**: Manages housing units and population density data separately using distinct contexts.
- **Material-UI (MUI)**: Utilizes MUI components for styling and UI elements.
- **State Management**: Utilizes React Context API for state management.
- **Data Fetching**: Uses useEffect and useState hooks for data fetching and management.
- **Charting Library**: Integrates MUI X to create and display dynamic charts for data visualization.


## Tech Stack

- React
- React Router DOM
- Material-UI (MUI)
- MUI X for Charts
- React Context API
- JSON Server

## How to Use

1. **Installation**: Clone the repository and install dependencies using `npm install`.
2. **Start JSON Server**: Run the JSON Server using `json-server --watch  data/data.json --port 8000`.
3. **Start React App**: Run the React app using `npm start`.


