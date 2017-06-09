import rp from 'request-promise'
import { authParameters, rawGitUrl, rawGitBasePath, gitUrl, gitHTMLPath } from '../options'
import { getContent } from '../helpers/getPackagesList'
let i, j
let readmesUrls = []

const getRawGitUrl = pkgGitUrl => {
  return pkgGitUrl.replace(`${gitUrl}${gitHTMLPath}`, `${rawGitUrl}${rawGitBasePath}`)
}

export async function getReadmes(urls) {
  return new Promise(async resolve => {
    for (i = 0; i < urls.length; i++) {
      let content = await getContent({
        uri: `${urls[i]}${authParameters}`,
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'git-codemirror-autocomplete'
        },
        json: true,
      })
      for (j = 0; j < content.length; j++) {
        if (content[j].name === 'README.md') {
          readmesUrls.push(content[j].html_url)
        }
      }
    }
    resolve(readmesUrls)
  })
}

export async function getReadmeContent(gitUrl) {
  const readmeRawGitUrl = getRawGitUrl(gitUrl)
  return new Promise(async resolve => {
    let readmeContent = await getContent({
      uri: `${readmeRawGitUrl}`,
      headers: {
        'User-Agent': 'git-codemirror-autocomplete'
      },
      json: true,
    })
    resolve(readmeContent)
  })
}
