Lab: Integrating APIs with React UI

Description:
This project demonstrates how to integrate an external API into a React application using fetch().
The application retrieves user data from JSONPlaceholder API and displays it dynamically.

Challenges Faced:
1. Understanding asynchronous data fetching with fetch and async/await.
2. Handling loading state while waiting for API response.
3. Managing errors if the API request fails.

Solutions:
1. Used useEffect() to fetch data when component mounts.
2. Added loading state with conditional rendering.
3. Added try-catch-finally for proper error handling.