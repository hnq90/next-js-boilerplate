let Tron
if (typeof window !== 'undefined') {
  Tron = require('reactotron-react-js')
  Tron.default.configure().connect()
}

/** Do Nothing. */
const noop = () => undefined

// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
if (process.env.NODE_ENV !== 'production' && Tron) {
  console.tron = Tron.default // attach reactotron to `console.tron`
} else {
  // attach a mock so if things sneaky by our __DEV__ guards, we won't crash.
  console.tron = {
    benchmark: noop,
    clear: noop,
    close: noop,
    configure: noop,
    connect: noop,
    display: noop,
    error: noop,
    image: noop,
    log: noop,
    logImportant: noop,
    onCustomCommand: noop,
    overlay: noop,
    reportError: noop,
    send: noop,
    startTimer: noop,
    storybookSwitcher: noop,
    use: noop,
    useReactNative: noop,
    warn: noop,
  }
}
