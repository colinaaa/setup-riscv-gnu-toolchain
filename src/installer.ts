import * as tc from '@actions/tool-cache'
import {info} from '@actions/core'

export const getToolchain = async (date: string): Promise<string> => {
  info('Start getting toolchain')
  const toolPath = tc.find('riscv-gnu-toolchain', date)

  if (toolPath) {
    info(`found riscv-gnu-toolchain version ${date} in cache`)
    return toolPath
  }

  info(`riscv-gnu-toolchain verion ${date} not found in cache`)

  info('Downloading...')
  const downloadPath = await tc.downloadTool(
    `https://toolchains.bootlin.com/downloads/releases/toolchains/riscv64/tarballs/riscv64--glibc--bleeding-edge-${date}.tar.bz2`,
  )

  info('Extracting...')
  const extractPath = await tc.extractTar(downloadPath, undefined, [
    'x',
    '--strip',
    '1',
  ])

  info('Adding to cache...')
  const path = await tc.cacheDir(extractPath, 'riscv-gnu-toolchain', date)

  info('Done!')
  return path
}

export default getToolchain
