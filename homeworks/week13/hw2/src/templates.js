export const cssTemplate = '.card {margin-top: 12px;}'
export function getForm(className, commentsClassName) {
  return `
  <div>
    <form class="${className}">
        <div class="mb-3">
          <label class="form-label">暱稱</label>
          <input type="text" class="form-control" name="nickname">
        </div>
        <div class="mb-3">
          <label class="form-label">留言內容</label>
          <textarea class="form-control"aria-label="With textarea" name="content"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">送出</button>
    </form>
    <div class="${commentsClassName}">
    </div>
    <div class="btn-more-section mt-2">
      <button type="button" class="btn ${className}-btn-more btn-primary">載入更多</button>
    </div>
  </div>
  `
}
