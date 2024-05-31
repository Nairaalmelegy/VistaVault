import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://370015e393845eb1f86b53585ac5213b@o4507346816466944.ingest.us.sentry.io/4507346912739328',
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
