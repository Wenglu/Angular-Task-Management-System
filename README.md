# Task Management System Application

## Overview

The Task Management System Application is designed to enhance productivity and organization by providing a user-friendly interface for managing tasks. This application is built using the latest version of Angular and incorporates advanced features such as state management with ngrx store and data persistence using local storage. The application is responsive, ensuring a seamless user experience on both desktop and mobile devices.

## Features

### Task Management
- **Add New Tasks**: Users can create new tasks by providing a title, description, due date, and priority level (low, medium, high).
- **Update Task Status**: Tasks can be updated to reflect their current status (to-do, in-progress, completed).
- **Edit Tasks**: Users can modify existing tasks, updating any of the task details as needed.
- **Delete Tasks**: Tasks can be removed from the list.

### Task Display and Sorting
- **List View**: Tasks are displayed in a list format for easy viewing.
- **Sorting**: Users can sort tasks by due date, priority, or status to quickly find the tasks they need.

### Responsive Design
- **Mobile and Desktop Support**: The application is fully responsive and works well on various screen sizes, providing a consistent user experience across devices.

### Export Functionality
- **Export to CSV**: Users can export their tasks to a CSV file for external use and backup.

### History Log
- **Task History**: A detailed history log is maintained for each task, recording all changes such as creation, status updates, and edits.

## Development Details

### Technology Stack
- **Frontend**: Angular (latest version)
- **State Management**: ngrx store
- **Data Persistence**: Local storage

### Project Setup

1. **Clone the Repository**:
    ```bash
    git clone <https://github.com/Mayank-Tiwari01/Angular-Task-Management-System.git>
    cd Angular-Task-Management-System
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    ng serve
    ```

    The application will be available at `http://localhost:4200/` (or you may give a custom port).

### Project Structure

- **src/app**:
  - **components**:
    - **task-form**: Handles the creation and editing of tasks.
    - **task-list**: Displays the list of tasks and sorting options.
    - **task-details**: Shows detailed information and history of a selected task.
  - **models**:
    - **task.model.ts**: Defines the Task interface.
  - **services**:
    - **task.service.ts**: Provides task management functionalities.
  - **store**:
    - **reducers**: Manages application state using ngrx store.
    - **actions**: Defines actions for state management.
    - **effects**: Handles side effects in state management.

### Detailed Features

#### Task Form Component (`task-form.component.ts` and `task-form.component.html`)
- Allows users to add and edit tasks.
- Validates input fields to ensure required information is provided.
- Maintains a history log for each task, recording changes with descriptive messages.

#### Task List Component (`task-list.component.ts` and `task-list.component.html`)
- Displays tasks in a list view.
- Provides sorting functionality to organize tasks by due date, priority, or status.

#### Task Details Component (`task-details.component.ts` and `task-details.component.html`)
- Displays detailed information about a selected task.
- Shows a history log of all changes made to the task.
- Includes icons and CSS styling for a professional and user-friendly appearance.

### CSS Styling (`styles.css`)
- **Global Styles**: Defines general styles for the application, including font, color schemes, and responsiveness.
- **Component-Specific Styles**: Enhances the appearance of each component with unique and clean CSS, using icons and appropriate colors for buttons, priority levels, and task actions.

### State Management (ngrx Store)
- **Reducers**: Manage the application's state.
- **Actions**: Define actions to modify the state.
- **Effects**: Handle side effects such as asynchronous operations.

### Data Persistence
- **Local Storage**: Ensures that task data is persisted across sessions, allowing users to retain their tasks even after refreshing the browser or closing the application.

## Future Enhancements (will keep updating)

- **User Authentication**: Implement user authentication to allow multiple users to manage their tasks independently.
- **Notifications**: Add notification features to remind users of upcoming due dates or changes to tasks.
- **API Integration**: Integrate with external APIs for more advanced features such as syncing tasks with calendar applications.

