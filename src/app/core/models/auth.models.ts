export interface User {
    id: number;
    email: string;
    name: string;
}

export interface AuthResponse {
    data: {
        access_token: string;
        refresh_token: string;
        user: User;
    };
    meta: {
        timestamp: string;
        path: string;
    };
}

export interface LoginRequest {
    email: string;
    password: string;
}
