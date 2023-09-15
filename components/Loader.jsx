import ClipLoader from 'react-spinners/ClipLoader';

function Loader({ loadingStatus }) {
  return (
    <ClipLoader
      color='#DB2777'
      loading={loadingStatus}
      size={50}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
}

export default Loader;
