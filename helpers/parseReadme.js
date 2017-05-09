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
  const rgxp = /^\n.|$/gm
  const attributes = table.split(rgxp)
  return attributes
}
