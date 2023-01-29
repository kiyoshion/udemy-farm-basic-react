import axios from 'axios'
import { useEffect } from 'react';
import { CsrfToken } from './types/types';
import { useAppSelector } from './app/hooks';
import { selectCsrfState } from './slices/appSlice';

function App() {
  const csrf = useAppSelector(selectCsrfState)

  useEffect(() => {
    const getScrfToken = async () => {
      const res = await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrftoken`
      )
      axios.defaults.headers.common['X-CSRF-Token'] = res.data.csrf_token
    }
    getScrfToken()
  }, [csrf])

  return (
    <div>

    </div>
  );
}

export default App;
