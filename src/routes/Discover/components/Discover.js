import React, { Component } from 'react';
import { getNewReleases, getFeaturedPlaylists, getCategories } from '../api';
import DiscoverBlock from './DiscoverBlock';
import '../styles/_discover.scss';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount = async () => {
    const releases = await getNewReleases();
    const playlists = await getFeaturedPlaylists();
    const categories = await getCategories();

    this.setState({
      newReleases: releases,
      playlists,
      categories
    })
  };

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
