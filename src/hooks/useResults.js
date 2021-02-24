import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

/**
 * REUSABLE HOOK
 * 
 * steps to make reusable hook:
 * 
 * 1. Extract hooks and functionality from component that is closely related to a specific business logic
 * 2. Create a export function that encloses all the hooks and functionality
 * 3. Export all the references to values and functions that our component will use
 */
export default () => {

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //methods
  const searchApi = async (searchTerm) => {
    try {
      console.log(`submitting term ${searchTerm}`)
      const response = await yelp.get('/businesses/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'New York'
        }
      });

      console.log(`response data: ${response.data}`);
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      console.log(`Error: ${err}`);
      setErrorMessage('Something Went Wrong')
    }
  }

  useEffect(() => {
    searchApi('')
  }, []);

  return [searchApi, results, errorMessage];
}