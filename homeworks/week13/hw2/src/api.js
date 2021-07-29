// eslint-disable-next-line import/no-unresolved
import $ from 'jquery'

export function addComments(apiUrl, siteKey, newCommentData, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_comment.php`,
    data: newCommentData
  }).done((data) => {
    cb(data)
  })
}

export function getComments(apiUrl, siteKey, offset, cb) {
  const ajaxUrl = `${apiUrl}/api_comments.php?site_key=${siteKey}&offset=${offset}`
  $.ajax({
    url: ajaxUrl
  }).done((data) => {
    cb(data)
  })
}
