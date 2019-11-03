import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards:[]
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc,
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }


  render() {
    return (
      <div class="container">
        <div class="card">
          <div class="panel-heading">
            <img src="profile.jpg" class="center"></img>
            <h3 class="center">
              User Stats
            </h3>
          </div>
          <div class="panel">
            <h4 class="center"><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <div class="card-individual">
                <h4 class="center">
                  Latest FitBit
                  {this.state.boards.map(board =>
                    <tr>
                      <td>{board.description}</td>
                    </tr>)}
                </h4>
                <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
              </div>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
