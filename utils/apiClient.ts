// utils/apiClient.ts
const baseURL = "https://api.myvverse.com/api";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
};

export const apiClient = async <T>(
  url: string,
  options: RequestOptions = {},
  token?: string // Add token parameter
): Promise<T> => {
  try {
    const { method = "GET", body, headers = {} } = options;
    const isFormData = body instanceof FormData;

    const response = await fetch(`${baseURL}${url}`, {
      method,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}), // Include token in headers if provided
      },
      body: isFormData ? (body as FormData) : JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

// Define typed helpers for each HTTP method
export const get = <T>(url: string, token?: string) =>
  apiClient<T>(url, { method: "GET" }, token);
export const post = <T>(
  url: string,
  body: unknown,
  headers?: Record<string, string>,
  token?: string
) => apiClient<T>(url, { method: "POST", body, headers }, token);
export const put = <T>(
  url: string,
  body: unknown,
  headers?: Record<string, string>,
  token?: string
) => apiClient<T>(url, { method: "PUT", body, headers }, token);
export const del = <T>(
  url: string,
  headers?: Record<string, string>,
  token?: string
) => apiClient<T>(url, { method: "DELETE", headers }, token);
