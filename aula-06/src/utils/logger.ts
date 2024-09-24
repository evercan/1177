export enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}

export class Logger {
    private static logLevel: LogLevel = LogLevel.INFO; // Define o nível de log padrão
  
    static setLogLevel(level: LogLevel) {
      this.logLevel = level;
    }
  
    static debug(message: string, ...args: any[]) {
      if (this.logLevel <= LogLevel.DEBUG) {
        console.debug(`[${LogLevel.DEBUG}] ${message}`, ...args);
      }
    }
  
    static info(message: string, ...args: any[]) {
      if (this.logLevel <= LogLevel.INFO) {
        console.info(`[${LogLevel.INFO}] ${message}`, ...args);
      }
    }
  
    static warn(message: string, ...args: any[]) {
      if (this.logLevel <= LogLevel.WARN) {
        console.warn(`[${LogLevel.WARN}] ${message}`, ...args);
      }
    }
  
    static error(message: string, ...args: any[]) {
      if (this.logLevel <= LogLevel.ERROR) {
        console.error(`[${LogLevel.ERROR}] ${message}`, ...args);
      }
    }
  }