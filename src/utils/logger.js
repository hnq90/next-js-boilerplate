import LogT from 'logt'

let logger

if (process.env.NODE_ENV === 'production') {
  logger = new LogT('info') // or logger = new LogT("none")
} else {
  logger = new LogT('silly')
}

export default logger
