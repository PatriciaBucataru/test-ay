import EventInvitation from '../components/EventInvitation';

// Event 15 - January 15, 2026 at 16:00
export default function Event15Page() {
  return (
    <EventInvitation
      eventDate="15 IANUARIE 2026"
      eventTime="16:00"
      eventId="event15"
      eventName="DESCHIDEREA LUMINII"
      apiEndpoint="/api/submit-rsvp-event15"
    />
  );
}
