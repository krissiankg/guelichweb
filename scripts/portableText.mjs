// Turns a compact article outline into Sanity Portable Text blocks.
// Supported inline syntax: **bold** and [label](https://url).

let counter = 0
const key = () => `k${(counter += 1).toString(36)}${Math.random().toString(36).slice(2, 7)}`

const span = (text, marks = []) => ({ _type: 'span', _key: key(), text, marks })

function parseInline(text) {
    const markDefs = []
    const children = []
    const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
    let cursor = 0
    let match

    while ((match = pattern.exec(text)) !== null) {
        if (match.index > cursor) children.push(span(text.slice(cursor, match.index)))

        if (match[1]) {
            children.push(span(match[1], ['strong']))
        } else {
            const linkKey = key()
            markDefs.push({ _type: 'link', _key: linkKey, href: match[3] })
            children.push(span(match[2], [linkKey]))
        }

        cursor = match.index + match[0].length
    }

    if (cursor < text.length) children.push(span(text.slice(cursor)))
    if (children.length === 0) children.push(span(''))

    return { children, markDefs }
}

const block = (text, extra = {}) => {
    const { children, markDefs } = parseInline(text)
    return { _type: 'block', _key: key(), style: 'normal', markDefs, children, ...extra }
}

// Each node is one of: { h2 }, { h3 }, { p }, { quote }, { ul: [] }, { ol: [] }
export function toPortableText(nodes) {
    return nodes.flatMap((node) => {
        if (node.h2) return [block(node.h2, { style: 'h2' })]
        if (node.h3) return [block(node.h3, { style: 'h3' })]
        if (node.quote) return [block(node.quote, { style: 'blockquote' })]
        if (node.ul) return node.ul.map((item) => block(item, { listItem: 'bullet', level: 1 }))
        if (node.ol) return node.ol.map((item) => block(item, { listItem: 'number', level: 1 }))
        return [block(node.p)]
    })
}
