import EventInvitation from '../components/EventInvitation';

export default function Event16Page() {
  return (
    <EventInvitation
      eventDate="16 IANUARIE 2026"
      eventTime="16:00"
      eventId="event16"
      eventName="DESCHIDEREA LUMINII"
      apiEndpoint="/api/submit-rsvp-event16"
    />
  );
}
