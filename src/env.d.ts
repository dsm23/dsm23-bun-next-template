declare namespace NodeJS {
  interface ProcessEnv {
    readonly ANALYZE: boolean;
    readonly CI: boolean;
    readonly PORT: string;
  }
}
