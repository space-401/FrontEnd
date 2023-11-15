import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback: React.ElementType;
  message?: string;
  onReset?: () => void;
  isRefresh?: boolean;
}

interface State {
  hasError: boolean;
  info: Error | null;
}

const initialState: State = {
  hasError: false,
  info: null,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, info: error };
  }

  onResetErrorBoundary = () => {
    const { onReset } = this.props;
    onReset == null ? void 0 : onReset();
    //onReset이 있다면 호출하고 아니면 호출하지 않는다.
    this.reset();
  };

  reset() {
    this.setState(initialState);
  }

  render() {
    const { hasError, info } = this.state;
    const { children, message, isRefresh } = this.props;

    console.log('에러바운더리', info);
    //인포의 분기점에 따라 다른 에러 바운더리 실행
    //메세지와 버튼을 다르게 지정하기
    if (hasError) {
      const props = {
        error: info,
        onResetErrorBoundary: this.onResetErrorBoundary,
      };
      return (
        <this.props.fallback
          isRefresh={isRefresh}
          onRefresh={this.reset}
          onReset={props.onResetErrorBoundary}
          message={message}
        />
      );
    }
    return children;
  }
}

export default ErrorBoundary;
