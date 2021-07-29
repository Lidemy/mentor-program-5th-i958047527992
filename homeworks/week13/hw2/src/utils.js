export function escape(toOutput) {
  return toOutput.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27')
    .replace(/\//g, '&#x2F')
}

export function appendCommentToDOM(container, { nickname, content }, isPrepend) {
  const html = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${escape(nickname)}</h5>
        <p class="card-text">${escape(content)}</p>
      </div>
    </div>
  `
  isPrepend ? container.prepend(html) : container.append(html)
}

export function appendStyle(cssTemplate) {
  const styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  styleElement.appendChild(document.createTextNode(cssTemplate))
  document.head.appendChild(styleElement)
}
