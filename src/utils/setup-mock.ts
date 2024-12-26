import debug from './env.ts'

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false && debug) {
    setup()
  }
}

export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: 'success',
    code: 200000,
  }
}

export const failResponseWarp = (data: unknown, msg: string, code = 50000) => {
  return {
    data,
    status: 'error',
    msg,
    code,
  }
}
