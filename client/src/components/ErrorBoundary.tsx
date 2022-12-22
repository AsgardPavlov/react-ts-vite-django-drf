import React, { useEffect } from 'react';

interface IProps {
  errorMessage: React.ReactNode;
  shouldRedirect?: boolean;
  children: React.ReactNode;
}
interface IState {
  hasError: boolean;
}

const ErrorBoundaryInner: React.FunctionComponent<{
  hasError: boolean;
  shouldRedirect?: boolean;
  reset: () => void;
  children: React.ReactNode;
}> = ({ children, hasError, reset, shouldRedirect }) => {
  useEffect((): (() => void) | undefined => {
    if (hasError && shouldRedirect) {
      const timer = setTimeout(() => {
        window.location.href = '/';
        reset();
      }, 5000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [hasError, shouldRedirect, reset]);

  return <>{children}</>;
};

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  private reset = (): void => this.setState({ hasError: false });

  public triggerError = (): void => {
    this.setState({ hasError: true });
  };

  public render(): JSX.Element {
    const shouldShowError = this.state.hasError;
    return (
      <ErrorBoundaryInner
        reset={this.reset}
        hasError={this.state.hasError}
        shouldRedirect={this.props.shouldRedirect || false}
      >
        {shouldShowError ? this.props.errorMessage : this.props.children}
      </ErrorBoundaryInner>
    );
  }
}
