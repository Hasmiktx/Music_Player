# React + Vite

  How to Run the Application Locally?
  

  1. Clone the repository:
  2. Navigate to the project directory
    cd music-app
  3.Install dependencies:
    npm install
  4.Run the development server:
   npm run dev
  5.Open your browser and visit    http://localhost:....


    Overview of Component Structure
     assets: Contains static assets like images, data, etc.
    components: Reusable UI components.
    store: Redux store configuration and slices for different parts of the state.
    utils: Utility functions or helper modules.
    App.js: Main application component.
    index.js: Entry point for the application.



  State Management Approach

State management is handled using Redux Toolkit, which simplifies the process of managing the application state. 
The application state is divided into slices, 
each responsible for managing a specific part of the state (currentSong state). 
The Redux store is configured in store.js, 
and slices are stored in the slices directory.