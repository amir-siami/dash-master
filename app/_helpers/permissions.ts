const rolePermissions: Record<string, string[]> = {
  viewer: ["home", "dashboard", "blogs"],
  admin: [],
};

export const checkPermission = (role: string, page: string): boolean => {
  if (role === "Admin") {
    return true;
  }
  // Check if the role is valid before using toLowerCase
  const normalizedRole = role?.toLowerCase();

  // If the role is undefined or not in rolePermissions, deny access
  if (!normalizedRole || !rolePermissions[normalizedRole]) {
    return false;
  }

  // Otherwise, check if the role has explicit permission for the page
  return rolePermissions[normalizedRole].includes(page);
};
