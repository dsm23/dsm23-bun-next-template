declare namespace NodeJS {
  interface ProcessEnv {
    readonly CI: boolean;
    readonly PORT: string;
  }
}
