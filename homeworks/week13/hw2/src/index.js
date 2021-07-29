/* eslint-disable prefer-const */
// eslint-disable-next-line import/no-unresolved
import $ from 'jquery'
import { addComments, getComments } from './api'
import { appendCommentToDOM, appendStyle } from './utils'
import { cssTemplate, getForm } from './templates'

function init(options) {
  let offset = 0
  let siteKey = ''
  let apiUrl = ''
  let containerElement = null
  let commentsDOM = null
  let commentsClassName
  let commentsSelector
  let formClassName
  let formSelector

  siteKey = options.siteKey
  apiUrl = options.apiUrl
  commentsClassName = `${siteKey}-comments`
  formClassName = `${siteKey}-add-comment-form`
  commentsSelector = `.${commentsClassName}`
  formSelector = `.${formClassName}`
  commentsDOM = $(commentsSelector)
  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentsClassName))
  appendStyle(cssTemplate)

  getnewComments()

  $(`.${formClassName}-btn-more`).click((e) => {
    getnewComments()
  })

  $(formSelector).submit((e) => {
    e.preventDefault()
    const nicknameJquery = $(`${formSelector} input[name=nickname]`)
    const textareaJquery = $(`${formSelector} textarea[name=content]`)
    const newCommentData = {
      site_key: siteKey,
      nickname: nicknameJquery.val(),
      content: textareaJquery.val()
    }
    addComments(apiUrl, siteKey, newCommentData, (data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      nicknameJquery.val('')
      textareaJquery.val('')
      appendCommentToDOM(commentsDOM, newCommentData, true)
      offset += 1
    })
  })

  function getnewComments() {
    commentsDOM = $(commentsSelector)
    getComments(apiUrl, siteKey, offset, (data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      const comments = data.discussions
      for (const comment of comments) {
        appendCommentToDOM(commentsDOM, comment, false)
        offset += 1
      }
      console.log('length', comments.length)
      if (comments.length < 5) {
        $(`.${formClassName}-btn-more`).addClass('d-none')
      }
    })
  }
}

// eslint-disable-next-line import/prefer-default-export
export { init }
