## Setting Up Vite React Project

1. **Clone or Download Project:**
   - Clone the project repository using Git:
     ```sh
     git clone [repository_url]
     ```
   - Alternatively, download the project as a ZIP file and extract it to your local machine.

2. **Open Folder in Local Machine:**
   - Navigate to the project folder in your file explorer or terminal:
     ```sh
     cd project-folder
     ```

3. **Install Dependencies:**
   - Open your terminal and run the following command to install project dependencies using npm:
     ```sh
     npm install
     ```

4. **Run Project Locally:**
   - After the installation is complete, start the development server by running the following command:
     ```sh
     npm run dev
     ```
   - This command will compile the project and start a local development server. You can access the project in your browser at the provided localhost URL.

### Approach and Technologies

*   **React**: The core library for building the user interface.
    
*   **Tailwind CSS**: For styling the application, making it easy to switch between light and dark themes.
    
*   **OpenWeatherMap API**: To fetch real-time weather data.
    
*   **Vite**: For setting up the development environment, providing fast build times and hot module replacement.
    

#### Approach:

*   The application uses the useState and useEffect hooks to manage state and side effects.
    
*   It fetches weather data based on the user's input and updates the UI accordingly.
    
*   The theme (light/dark) is toggled using a checkbox, and the appropriate styles are applied using Tailwind CSS.
    

### Known Issues and Limitations

*   **API Key**: Ensure you have a valid OpenWeatherMap API key. The free tier has limitations on the number of requests.
    
*   **Error Handling**: The app currently logs errors to the console. Improved user feedback for network or API errors would enhance user experience.
    
*   **Responsiveness**: While the app uses Tailwind CSS for responsive design, there might be minor layout issues on very small or very large screens.
    
*   **Localization**: The app does not currently support multiple languages.