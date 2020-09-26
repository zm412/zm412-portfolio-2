const React = require('react');

class News extends React.Component{
  constructor(){
    super();
  }
  
  render(){

    var newsTemplate = this.props.data.map(function(item, index) {
      return (
        <li key={index}>
          <p className="news__author">{item.name}:</p>
          <p className="news__text">{item.body}</p><hr />
        </li>
      )
    })


    return (
      <ul className="news">
      <h3> {this.props.message}</h3><hr />
        {newsTemplate}
      </ul>
    );
  }
}




module.exports = News;
