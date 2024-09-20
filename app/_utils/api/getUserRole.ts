// Define the User type and export it
export interface User {
  username: string;
  role: "Viewer" | "Admin"; // Define allowed roles as a union of string literals
}

// Simulate an API call that returns a user with a role
const getUserRole = async (): Promise<User> => {
  return {
    username: "JohnDoe",
    role: "Viewer", // Could be "Viewer" or "Admin"
  };
};

export default getUserRole;
