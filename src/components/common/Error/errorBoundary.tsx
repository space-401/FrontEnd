import { Component } from 'react';
import { HTTPError } from '@apis/HTTPError';
import ErrorPage from '@components/common/Error/index';
import { HTTP_STATUS_CODE } from '@constants/api';
import { Outlet } from 'react-router-dom';

interface Props {
  message?: string;
  onReset: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const initialState: State = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  resetErrorBoundary = () => {
    this.props.onReset();
    this.setState(initialState);
  };

  static getDerivedStateFromError(error: Error | HTTPError) {
    return { hasError: true, info: error };
  }

  componentDidCatch(error: Error | HTTPError) {
    this.setState({ hasError: true, error });
  }

  render() {
    const { error, hasError } = this.state;

    if (hasError) {
      return (
        <ErrorPage
          statusCode={
            error instanceof HTTPError
              ? error.statusCode
              : HTTP_STATUS_CODE.NOT_FOUND
          }
          resetError={this.resetErrorBoundary}
        />
      );
    }

    return <Outlet />;
  }
}

export default ErrorBoundary;
