import Form from '@/app/ui/bookings/create-form';
import Breadcrumbs from '@/app/ui/bookings/breadcrumbs';
// import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/dashboard/bookings' },
          {
            label: 'Create Invoice',
            href: '/dashboard/bookings/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}