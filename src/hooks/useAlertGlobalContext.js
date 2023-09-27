import { useContext } from 'react';

import { AlertContext } from '../context/alert/AlertContext';

const useAlertGlobalContext = () => {
  return useContext(AlertContext);
};

export default useAlertGlobalContext;
