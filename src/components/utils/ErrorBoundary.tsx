import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-secondary/30">
                    <div className="text-center max-w-md mx-auto p-8">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl text-white">!</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">
                            Terjadi Kesalahan
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:shadow-lg transition-all"
                            >
                                Muat Ulang
                            </button>
                            <Link
                                to="/"
                                className="px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-secondary/10 transition-all"
                            >
                                Beranda
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
