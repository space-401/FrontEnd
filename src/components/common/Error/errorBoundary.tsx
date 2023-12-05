import { HTTPError } from '@/apis';
import { Component, PropsWithChildren } from 'react';
import { ErrorComponent } from './ErrorCompoent';

interface Props {
  message?: string;
  onReset: (error: Error | HTTPError) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const initialState: State = {
  hasError: false,
  error: null,
};

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  resetErrorBoundary = () => {
    const { onReset } = this.props;
    const { error } = this.state;

    onReset?.(error!);
    this.setState(initialState);
  };
  static getDerivedStateFromError(error: Error | HTTPError) {
    return { hasError: true, error };
  }

  render() {
    const { error, hasError } = this.state;

    return hasError ? (
      <ErrorComponent
        statusCode={error instanceof HTTPError ? error.statusCode : undefined}
        resetError={this.resetErrorBoundary}
      />
    ) : (
      this.props.children
    );
  }
}
