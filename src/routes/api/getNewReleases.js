import apiCall from './apiCall';

export default function getNewReleases() {
  return apiCall('new-releases', 'albums');
}
