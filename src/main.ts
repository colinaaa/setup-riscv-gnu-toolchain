import * as core from '@actions/core'

import {getToolchain} from './installer'
import {replacer} from './replacer'

const run = async (): Promise<void> => {
  const date = core.getInput('release-date', {required: false})
  const toolPath = await getToolchain(date)
  const binPath = await replacer(`${toolPath}/bin`)

  core.info(`Adding ${binPath} to path`)
  core.addPath(binPath)
}

run()
