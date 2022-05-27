class ErrorEntity {
  public code: number;
  public message: String;

  constructor(code: number, message: String) {
    this.code = code;
    this.message = message;
  }
}

export { ErrorEntity };
