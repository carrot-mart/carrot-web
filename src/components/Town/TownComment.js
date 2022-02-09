import React, { Component } from 'react';



class Comment extends React.Component {
  constructor(){
    super();
      this.state = {
      value= "",
      commentList = [],
      }
    }  

    // 사용자로 부터 받아오는 값을 value에 업데이트 
      getValue = (e) => {
        this.setState({
            value: e.target.value
    })
  }
  
// 사용자로부터 받아오는 값을 commentList에 배열 데이터 추가 & 댓글 초기화
      addComment = () => {
        this.setState({
            commentList: this.state.commentList.concat([this.state.value]),
            value= "",
    })
  }


    render() {
      return (
        <div>
            <form onSubmit={this.addComment}>
                <input onChange={this.getValue} type="text" />
                <button>게시</button>

                <ul>
                    <li>hello</li>
                    {this.state.commentList.map((comment, index) => {
                        <li key={index}>{comment}</li>
                    })}
                </ul>
            </form>
        </div>
      );
    }
  };
  
  export default Comment;
