import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from '../../components/user';
import Page from '../../components/page';
import {getPhotos} from "../../actions/page-actions";
import {handleLogin} from "../../actions/user-action";

class App extends Component {

  render() {
    const {user, page, getPhotosAction, handleLoginAction} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Топ фото</h1>
        </header>
        <p className="App-intro">Самые залайканые фото</p>
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}/>
        <Page
          year={page.year}
          photos={page.photos}
          error={page.error}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoginAction: () => dispatch(handleLogin()),
    getPhotosAction: year => dispatch(getPhotos(year))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
