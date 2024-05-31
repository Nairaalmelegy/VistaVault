import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  tracesSampleRate: 1.0,
});

export default function GlobalError({ error }) {
  // Log the error to Sentry
  Sentry.captureException(error);

  return (
    <div>
      <h1>Something went wrong</h1>
    </div>
  );
}
