import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    toggleIsLike,
    backgroundColorList,
    deleteComment,
  } = props
  const {id, name, comment, isLike} = commentDetails

  const total = backgroundColorList.length

  const colorId = Math.ceil(Math.random() * total)

  const backgroundColor = backgroundColorList[colorId - 1]

  const firstLetter = name.slice(0, 1)

  const onClickDelete = () => {
    deleteComment(id)
  }

  const onClickLikeIcon = () => {
    toggleIsLike(id)
  }
  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClassName = isLike ? 'liked' : 'like'

  return (
    <li className="comment-card">
      <div className="name-card">
        <p className={`logo ${backgroundColor}`}>{firstLetter}</p>
        <div className="container">
          <div className="name-time">
            <p className="user-name">{name}</p>
            <p className="time">less than a minute ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="Like-icon-container"
          onClick={onClickLikeIcon}
        >
          <img src={likeImgUrl} className="like-icon" alt="like" />
          <p className={likeClassName}>Like</p>
        </button>
        <button
          type="button"
          className="Delete-icon-container"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="like-icon"
            alt="delete"
            testid="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
