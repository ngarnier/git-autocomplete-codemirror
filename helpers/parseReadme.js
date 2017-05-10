import { config } from '../config'

export function parseReadme (readme) {
  const elements = readme.split('## ')
  return elements
}

export function getElementsFromReadme(readme) {
  const rgxp = /^#+.*/gm
  const els = readme.match(rgxp)
  const elements = els.map(e => e.replace(/^#+\s+/g,''))
  return elements
}

export function getTablesFromReadme(readme) {
  const rgxp = /^-+.*-+$/gm
  const tables = readme.split(rgxp)
  const del = tables.shift()
  return tables
}

export function getAttributeFromTable(table) {
  let i
  let attrs = {}
  const rgxp = /^\n+.*\|+$/gm
  const attributesList = table.replace(/\n{2,}/g, '').split(rgxp)

  const messyAttributes = attributesList[0].split(/\s*\|.*\n/g)

  const attributes = messyAttributes.map(e => e.replace('\n', ''))
  for (i = 0; i < attributes.length; i++) {
    if (attributes[i] && !(/\s/.test(attributes[i]))) {
      attrs[attributes[i]] = null
    }
  }
  
  for (i = 0; i < config.forceAttributes.length; i++) {
    attrs[config.forceAttributes[i]] = null
  }

  return attrs
}
