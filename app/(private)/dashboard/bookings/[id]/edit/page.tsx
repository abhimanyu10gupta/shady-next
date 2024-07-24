import Form from '@/app/ui/bookings/edit-form';
import Breadcrumbs from '@/app/ui/bookings/breadcrumbs';
import { fetchBookingById, fetchBookings } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const booking = await fetchBookingById(id);
      if (!booking) {
        notFound();
      }
    return (
        <main>
        <Breadcrumbs
            breadcrumbs={[
            { label: 'Bookings', href: '/dashboard/bookings' },
            {
                label: 'Edit Booking',
                href: `/dashboard/bookings/${id}/edit`,
                active: true,
            },
            ]}
        />
        <Form booking={booking}  />
        </main>
  );
}