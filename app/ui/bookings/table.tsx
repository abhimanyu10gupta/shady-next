
import Image from 'next/image';
import { UpdateBooking, DeleteBooking } from '@/app/ui/bookings/buttons';
import InvoiceStatus from '@/app/ui/bookings/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchBookings } from '@/app/lib/data';
// import { fetchFilteredInvoices } from '@/app/lib/data';
import Booking from '@/models/booking'
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

export default async function EventsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // const invoices = await fetchFilteredInvoices(query, currentPage);
  const bookings = await fetchBookings();
  
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {bookings?.map((booking) => (
              <div
                key={booking.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={booking.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${booking.name}'s profile picture`}
                      /> */}
                      <p>{booking.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{booking.email}</p>
                  </div>
                  <InvoiceStatus status={booking.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(booking.amount)}
                    </p>
                    <p>{formatDateToLocal(booking.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateBooking id={booking.id} />
                    <DeleteBooking id={booking.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Guests
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {bookings?.map((booking) => (
                <tr
                  key={booking.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={booking.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${booking.name}'s profile picture`}
                      /> */}
                      <p>{booking.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {booking.pax}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {booking.time}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(booking.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* <InvoiceStatus status={booking.phone} /> */}
                    {booking.phone}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateBooking id={booking.id} />
                      <DeleteBooking id={booking.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
