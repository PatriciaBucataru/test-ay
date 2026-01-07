import EventInvitation from '../components/EventInvitation';

export default function Event15ENPage() {  // <-- Schimbă aici
  return (
    <EventInvitation
      eventDate="JANUARY 15, 2026"
      eventTime="4:00 PM"
      eventId="event15-en"
      eventName="THE OPENING OF LIGHT"
      apiEndpoint="/api/submit-rsvp-event15-en"
      language="en"
    />
  );
}