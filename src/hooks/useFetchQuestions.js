import {useEffect, useState} from 'react';
import {fetchQuestionsApi} from '../mock/data';

export function useFetchQuestions() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const [] = useState();

  useEffect(() => {
    setLoading(true);
    fetchQuestionsApi().then(function (res) {
      setLoading(false);
      setData(res);
    });
  }, []);

  return {
    loading,
    data,
  };
}
