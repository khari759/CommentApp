import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comment extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onClickDelete = id => {
    const {commentList} = this.state

    const updatedCommentList = commentList.filter(each => each.id !== id)

    this.setState({
      commentList: updatedCommentList,
    })
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, comment, commentList} = this.state
    const count = commentList.length
    return (
      <div className="bg">
        <div className="header">
          <form className="form-card" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              className="input"
              onChange={this.onChangeName}
            />
            <textarea
              rows="6"
              value={comment}
              cols="45"
              placeholder="Your Comment"
              className="input"
              onChange={this.onChangeComment}
            />
            <button type="submit" className="btn">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="separator" />
        <div className="count-card">
          <p className="btn">{count}</p>
          <p className="comment-text">Comments</p>
        </div>
        <ul className="comment-list">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsLike={this.toggleIsLike}
              backgroundColorList={initialContainerBackgroundClassNames}
              deleteComment={this.onClickDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comment
