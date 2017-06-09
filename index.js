import rp from 'request-promise'
import { config } from './config'

import { getContent, getPackagesUrls } from './helpers/getPackagesList'
import { getReadmes, getReadmeContent } from './helpers/getAttributes'
import { getElementsFromReadme, getTablesFromReadme, getAttributeFromTable } from './helpers/parseReadme'
import { rawGitBasePath, rawGitUrl, gitAPIUrl, gitBasePath, authParameters, rawGitOptions, gitOptions } from './options'

let tags = {}
let readmes 

async function buildTags(options) {
  let i, k, readme, elements, tables, tag,
  attributes = []
    const list = await getContent(options)
    const urls = getPackagesUrls(list)
    
    const readmes = await getReadmes(urls) // Get all readmes urls
    
    for (i = 0; i < readmes.length; i++) {
      readme = await getReadmeContent(readmes[i])
      elements = getElementsFromReadme(readme)
      tables = getTablesFromReadme(readme)
      for (k = 0; k < tables.length; k++) {
        tags[elements[k].replace('mjml-', 'mj-')] = {
          attrs: getAttributeFromTable(tables[k])
        }
      }
    }
    
    console.log(JSON.stringify(tags, null, 4))
    console.log(`Version: ${config.tag}`)
    return tags
}

buildTags(gitOptions)
