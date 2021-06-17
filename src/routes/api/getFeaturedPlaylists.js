import apiCall from './apiCall';

export default function getFeaturedPlaylists() {
  return apiCall('featured-playlists', 'playlists');
}
