type LogLevel = 'info' | 'warn' | 'error'

class Logger {
  private log(level: LogLevel, message: string, meta?: any) {
    const timestamp = new Date().toISOString()
    const logMessage = {
      timestamp,
      level,
      message,
      ...(meta && { meta }),
    }

    if (process.env.NODE_ENV === 'production') {
      // In production, you might want to use a proper logging service
      console[level](JSON.stringify(logMessage))
    } else {
      console[level](message, meta)
    }
  }

  info(message: string, meta?: any) {
    this.log('info', message, meta)
  }

  warn(message: string, meta?: any) {
    this.log('warn', message, meta)
  }

  error(message: string, meta?: any) {
    this.log('error', message, meta)
  }
}

export const logger = new Logger()