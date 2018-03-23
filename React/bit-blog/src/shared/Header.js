import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";


const Header = () => {
    return (
        <React.Fragment>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">RND BLG</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Authors</a>
      <a class="nav-item nav-link" href="#">About</a>
      
    </div>
  </div>
</nav>
        </React.Fragment>
    )
}
export default Header