export interface LoginModel {
  login: string | undefined,
  password: string | undefined
}

export interface LoginResponse {
  accessToken: string,
  user: {
    email: string,
    id: number
  }
}
