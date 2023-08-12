function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div>
            <h2>Something went wrong</h2>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}

export default ErrorFallback;