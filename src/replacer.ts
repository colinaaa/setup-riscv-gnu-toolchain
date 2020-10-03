import * as glob from '@actions/glob'
import {info} from '@actions/core'
import {mv} from '@actions/io'

const replace = (original: string): string =>
  original.replace(/buildroot-/i, '')

export const replacer = async (path: string): Promise<string> => {
  info('Start replacing riscv64-buildroot-linux-gnu-* to riscv64-linux-gnu-*')
  const globber = await glob.create(`${path}/riscv64-buildroot-*`, {
    followSymbolicLinks: false
  })
  for await (const bin of globber.globGenerator()) {
    info(`Replacing ${bin} ...`)
    mv(bin, replace(bin), {force: true})
  }

  info(`Replace done`)
  return path
}

export default replacer
