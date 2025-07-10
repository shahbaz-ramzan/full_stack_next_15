interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

class AuthService {
  private static instance: AuthService;
  private apiUrl = "/api/auth";

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "login",
          ...credentials,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Store token in localStorage (in production, consider httpOnly cookies)
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      return {
        success: false,
        error: "Network error occurred",
      };
    }
  }

  async logout(): Promise<AuthResponse> {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "logout",
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Clear stored auth data
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
      }

      return data;
    } catch (error) {
      return {
        success: false,
        error: "Network error occurred",
      };
    }
  }

  async checkAuthStatus(): Promise<AuthResponse> {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        return { success: false, error: "No token found" };
      }

      const response = await fetch(this.apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: "Network error occurred",
      };
    }
  }

  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default AuthService.getInstance();
