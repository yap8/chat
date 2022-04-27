import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setSpinnerColor } from '../../redux/actions/spinnerActions';
import usePrivateRoute from '../../hooks/usePrivateRoute';
import colors from '../../assets/data/colors';

const Theme = () => {
  usePrivateRoute();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSpinnerChange = (name) => {
    dispatch(setSpinnerColor(name));
  };

  const handleGoBack = () => navigate(-1);

  return (
    <div className="w-1/2 p-2 bg-white shadow rounded dark:bg-slate-800 flex flex-col">
      <h1 className="text-xl text-center mb-2 dark:text-white">
        Spinner color
      </h1>
      <ul className="flex flex-wrap justify-center">
        {colors.map((color) => (
          <li key={color.name} className="p-2">
            <button
              className={`block w-20 h-20 ${color.class} rounded shadow`}
              onClick={() => handleSpinnerChange(color.name)}
            />
          </li>
        ))}
      </ul>
      <button
        className="text-blue-500 hover:underline w-full"
        onClick={handleGoBack}
      >
        Go back
      </button>
    </div>
  );
};

export default Theme;
