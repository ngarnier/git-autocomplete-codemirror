import { config } from './config'

export const rawGitUrl = 'https://cdn.rawgit.com/'
export const gitAPIUrl = 'https://api.github.com/repos/'
export const gitUrl = 'https://github.com/'
export const gitHTMLPath = `${config.owner}/${config.repo}/blob/master/packages`
export const gitBasePath = `${config.owner}/${config.repo}/contents/packages`
export const rawGitBasePath = `${config.owner}/${config.repo}/${config.tag}/packages`

export const authParameters = `?client_id=${config.gitID}&client_secret=${config.gitSecret}`
let tags = {}

export const rawGitOptions = {
    uri: `${rawGitUrl}${rawGitBasePath}`,
    headers: {
        'User-Agent': 'git-codemirror-autocomplete'
    },
    json: true,
}

export const gitOptions = {
    uri: `${gitAPIUrl}${gitBasePath}${authParameters}`,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'git-codemirror-autocomplete'
    },
    json: true,
}
