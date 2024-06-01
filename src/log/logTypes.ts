export interface LogFn{
  (message?: string, ...optionalParams: []): void;
}
export interface Logger{
  log: LogFn;    // Console level 0;
  debug: LogFn ; // Log Level 1
  signal: LogFn; // Log Level 2
  info: LogFn;   // Log Level 2
  event: LogFn;  // Log Level 3
  warn: LogFn;   // Log level 4
  error: LogFn;  // Log Level 5
}

export type LogLevel = 'log' | 'debug' | 'signal' | 'info' | 'event' | 'warn' | 'error' | 'crit';
