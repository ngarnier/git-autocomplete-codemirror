import rp from 'request-promise'
import { config } from './config'

import { getContent, getPackagesUrls } from './helpers/getPackagesList'
import { getReadmes, getReadmeContent } from './helpers/getAttributes'
import { getElementsFromReadme, getTablesFromReadme, getAttributeFromTable } from './helpers/parseReadme'
import { rawGitBasePath, rawGitUrl_dev, rawGitUrl_prod, gitAPIUrl, gitBasePath, authParameters, rawGitOptions, gitOptions } from './options'

let tags = {}
let readmes 

async function buildTags(options) {
  let i, j, readme, elements
    const list = await getContent(options)
    const urls = getPackagesUrls(list)
    
    const readmes = await getReadmes(urls)
    
    for (i = 0; i < readmes.length; i++) {
      readme = await getReadmeContent(readmes[i])
      elements = getElementsFromReadme(readme)
      for (j = 0; j < elements.length; j++) {
        tags[elements[j].replace('mjml-','mj-')] = {}
      }
    }
    
    console.log(tags)
    
    // const elements = getElementsFromReadme(readme)
  //  const tables = getTablesFromReadme(readme)
    
    
    // const attributes = getAttributeFromTable(tables[0])
    
//    console.log(attributes)
    
    //const readme = getReadmeContent(readmes[0])
    //console.log(readme)
    // get content of each readme and parse attributes
    // add each attributes for each tag
}

buildTags(gitOptions)
