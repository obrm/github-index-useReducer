import { useContext } from 'react';

import { GithubContext } from '../context/github/GithubContext';

const useGithubGlobalContext = () => {
  return useContext(GithubContext);
};

export default useGithubGlobalContext;