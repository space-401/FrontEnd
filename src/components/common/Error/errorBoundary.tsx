import { Component } from 'react';
import { HTTPError } from '@apis/HTTPError';
import ErrorPage from '@components/common/Error/index';
import { Outlet } from 'react-router-dom';

interface Props {
  message?: string;
  onReset?: (error: Error | HTTPError) => void;
  isRefresh?: boolean;
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
    const { onReset } = this.props;
    const { error } = this.state;

    onReset?.(error!);
    this.setState(initialState);
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <ErrorPage
          statusCode={error instanceof HTTPError ? error.statusCode : undefined}
          errorCode={error instanceof HTTPError ? error.code : undefined}
          resetError={this.resetErrorBoundary}
        />
      );
    }

    return <Outlet />;
  }
}

export default ErrorBoundary;
