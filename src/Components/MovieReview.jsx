import React from 'react';

function MovieReview(props) {
  const { title, author, rating, review } = props;

  return (
    <div style={{width:'80%'}}>

      <h2>{title}</h2>
      <div style={{marginTop:-20}}>
      <p style={{fontSize:15}}>By {author}<img src={'verified.png'} style={{width:18, paddingLeft:5}}/></p>
      </div>
      <p>Rating : {rating}/10</p>
      <p>{review}</p>
      <div className="popularnowtitle">----------------------------------------------------------------------------</div>

    </div>
  );
}

export default MovieReview;