import { config } from '../config'
import { getAttributes } from '../helpers/getAttributes'

const rp = require('request-promise')
let urls = []
let url

export async function getContent (options) {
    const content = await rp(options)
    return content
}

const isNotAnException = name => {
  let k
  for (k = 0; k < config.exceptionElements.length; k++) {
    if (name == config.exceptionElements[k]) {
      return false
    }
  }
  return true
}

export function getPackagesUrls(packages) {
  for (let i = 0; i < packages.length; i++) {
    if (!packages[i].size && isNotAnException(packages[i].name)) {
      url = packages[i].url.replace('?ref=master', '')
      urls.push(url)
    }
  }
  return urls
}
