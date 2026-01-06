import EventInvitation from '../components/EventInvitation';

// Event 17 - January 17, 2026 at 16:00
export default function Event17Page() {
  return (
    <EventInvitation
      eventDate="17 IANUARIE 2026"
      eventTime="16:00"
      eventId="event17"
      eventName="DESCHIDEREA LUMINII"
      apiEndpoint="/api/submit-rsvp-event17"
    />
  );
}
