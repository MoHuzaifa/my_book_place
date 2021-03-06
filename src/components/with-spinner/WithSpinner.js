import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyle';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  return Spinner;
};

export default WithSpinner;
