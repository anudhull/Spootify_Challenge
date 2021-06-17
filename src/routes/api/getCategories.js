import apiCall from './apiCall';

export default function getCategories() {
  return apiCall('categories', 'categories');
}
