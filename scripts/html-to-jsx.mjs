import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const pagesDir = path.join(root, 'src', 'pages')

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  charset: 'charSet',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  enctype: 'encType',
  formaction: 'formAction',
  maxlength: 'maxLength',
  minlength: 'minLength',
  readonly: 'readOnly',
  novalidate: 'noValidate',
  srcset: 'srcSet',
  usemap: 'useMap',
  viewbox: 'viewBox',
  onclick: 'onClick',
  onchange: 'onChange',
  onsubmit: 'onSubmit',
  oninput: 'onInput',
  onfocus: 'onFocus',
  onblur: 'onBlur',
  onkeydown: 'onKeyDown',
  onkeyup: 'onKeyUp',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-miterlimit': 'strokeMiterlimit',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'font-family': 'fontFamily',
  'text-anchor': 'textAnchor',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  'xmlns:xlink': 'xmlnsXlink',
  'xlink:href': 'xlinkHref',
  'xml:space': 'xmlSpace',
}

function cssToJsxObject(css) {
  const entries = css
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const idx = part.indexOf(':')
      if (idx === -1) return null
      const key = part
        .slice(0, idx)
        .trim()
        .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      const value = part.slice(idx + 1).trim()
      return [key, value]
    })
    .filter(Boolean)

  return `{${entries.map(([k, v]) => `${k}: '${v.replace(/'/g, "\\'")}'`).join(', ')}}`
}

function mapAttrName(name) {
  const lower = name.toLowerCase()
  if (ATTR_MAP[lower]) return ATTR_MAP[lower]
  if (name.startsWith('aria-') || name.startsWith('data-') || name.startsWith('stroke-') === false) {
    if (name.includes('-') && !name.startsWith('aria-') && !name.startsWith('data-')) {
      return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    }
  }
  return name
}

function convertTag(tag) {
  return tag.replace(
    /([:@A-Za-z][\w:.-]*)(?:\s*=\s*("[\s\S]*?"|'[\s\S]*?'))?/g,
    (match, name, quoted, offset) => {
      if (offset === 0) return match
      const mapped = mapAttrName(name)
      if (!quoted) {
        if (/^(checked|disabled|selected|required|readOnly|autoFocus|multiple|muted|loop|hidden|open)$/i.test(mapped)) {
          return `${mapped}`
        }
        return match
      }
      const raw = quoted.slice(1, -1)
      if (mapped === 'style') {
        return `style={${cssToJsxObject(raw)}}`
      }
      if (mapped.startsWith('on') && mapped[2] && mapped[2] === mapped[2].toUpperCase()) {
        return `${mapped}={() => { ${raw} }}`
      }
      return `${mapped}=${quoted}`
    },
  )
}

function htmlToJsx(html) {
  let out = html.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/*${c.replace(/\*\//g, '*\\/')}*/}`)
  out = out.replace(/<([a-zA-Z][\w:-]*)([^>]*)>/g, (full, tag, rest) => {
    if (rest.trim().endsWith('/')) {
      const inner = rest.trim().slice(0, -1)
      return `<${tag}${convertTag(' ' + inner)} />`
    }
    return `<${tag}${convertTag(rest)}>`
  })
  return out
}

function extractMarkup(html) {
  const bodyMatch = html.match(/<body([^>]*)>([\s\S]*)<\/body>/i)
  if (bodyMatch) {
    const classMatch = bodyMatch[1].match(/class=["']([^"']*)["']/)
    return {
      className: classMatch ? classMatch[1] : '',
      inner: bodyMatch[2].replace(/<script[\s\S]*?<\/script>/gi, ''),
    }
  }

  const afterHead = html.replace(/[\s\S]*<\/head>/i, '')
  const inner = afterHead.replace(/<\/html>/i, '').replace(/<script[\s\S]*?<\/script>/gi, '')
  const classMatch = inner.match(/<(?:main|div)[^>]*class=["']([^"']*)["']/)
  return { className: classMatch ? classMatch[1] : 'min-h-screen', inner }
}

function wireHomeLinks(jsx) {
  const replacements = [
    ['Início', '/'],
    ['Buscar', '/buscar'],
    ['Mensagens', '/mensagens'],
    ['Criar', '/criar'],
    ['Perfil', '/perfil'],
    ['Configurações', '/configuracoes'],
  ]

  let result = jsx
  for (const [label, href] of replacements) {
    result = result.replace(
      new RegExp(`href="#"(?=[\\s\\S]{0,500}<span[^>]*>\\s*${label}\\s*</span>)`, 'g'),
      `href="${href}"`,
    )
  }

  result = result.replace(
    /href="#"(?=[^>]*title="Marcos Vinícius")/g,
    'href="/perfil"',
  )

  return result
}

const pages = [
  { file: 'gooday_home_feed_comunidades.html', name: 'Home', wire: true },
  { file: 'gooday_buscar.html', name: 'Buscar' },
  { file: 'gooday_criar_conta_cadastro.html', name: 'Cadastro' },
  { file: 'gooday_configura_es.html', name: 'Configuracoes' },
  { file: 'gooday_criar_modal.html', name: 'Criar' },
  { file: 'gooday_criar_story_modal.html', name: 'CriarStory' },
  { file: 'gooday_mensagens.html', name: 'Mensagens' },
  { file: 'gooday_meu_perfil.html', name: 'Perfil' },
  { file: 'gooday_notifica_es.html', name: 'Notificacoes' },
  { file: 'gooday_nova_publica_o.html', name: 'NovaPublicacao' },
]

fs.mkdirSync(pagesDir, { recursive: true })

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page.file), 'utf8')
  const { className, inner } = extractMarkup(html)
  let jsx = htmlToJsx(inner.trim())
  if (page.wire) jsx = wireHomeLinks(jsx)

  const source = `export default function ${page.name}() {
  return (
    <div className=${JSON.stringify(className)}>
      ${jsx}
    </div>
  )
}
`

  fs.writeFileSync(path.join(pagesDir, `${page.name}.jsx`), source)
  console.log('Wrote', page.name)
}
