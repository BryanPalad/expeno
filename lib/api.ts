// API response types
export interface LoginResponse {
  success: boolean;
  message?: string;
}

export interface LogoutResponse {
  success: boolean;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
}

export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface UsersResponse {
  success: boolean;
  users?: User[];
  message?: string;
}

// API error class
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Base fetch function with error handling
async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || `HTTP error! status: ${response.status}`,
        response.status,
        data
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    console.error('API request failed:', error);
    throw new ApiError('Network error occurred', 0);
  }
}

// Authentication API functions
export const authApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    return apiFetch<LoginResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  logout: async (): Promise<LogoutResponse> => {
    return apiFetch<LogoutResponse>('/api/auth/logout', {
      method: 'POST',
    });
  },

  register: async (email: string, password: string): Promise<RegisterResponse> => {
    return apiFetch<RegisterResponse>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
};

// Users API functions
export const usersApi = {
  getUsers: async (): Promise<UsersResponse> => {
    return apiFetch<UsersResponse>('/api/users');
  },
};

// Export all API functions
export const api = {
  auth: authApi,
  users: usersApi,
};