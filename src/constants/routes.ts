/**
 * Application route constants
 */
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  DASHBOARD_SETTINGS: "/dashboard/settings",
  NOT_FOUND: "/404",
} as const;

/**
 * API route constants
 */
export const API_ROUTES = {
  AUTH: "/api/auth",
  USERS: "/api/users",
  DASHBOARD: "/api/dashboard",
} as const;

/**
 * Protected routes that require authentication
 */
export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.DASHBOARD_SETTINGS,
] as const;

/**
 * Public routes that don't require authentication
 */
export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
] as const;

/**
 * Auth routes that redirect authenticated users
 */
export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER] as const;
