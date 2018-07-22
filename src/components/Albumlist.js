import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class Albumlist extends Component {
  // same as
  // state = { albums: [] };
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }


  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} mathy={album} />
    );
  }


  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>

    );
  }
}

export default Albumlist;
