export interface RegisterRequest {
  name: string,
  email: string,
  password: string
}

export interface RegisterInputData extends RegisterRequest{
  repeat_password: string
}
