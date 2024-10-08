import Booking from '@/models/booking';
import dbConnect from './dbConnect';
import { formatCurrency, getNextSunday } from './utils';
import mongoose from 'mongoose';
import  Events  from '@/models/event';

export async function fetchBookings() {
  dbConnect();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    const data = await Booking.find({});

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch bookings data.');
  }
}

export async function fetchLatestBookings() {
  await dbConnect();

  const nextSunday = getNextSunday().toISOString().split('T')[0];
  const today = new Date().toISOString().split('T')[0];

  try {
    const data = await Booking.find({      
      $and: [
          {date: {$gte : today}},
          {date: {$lte : nextSunday}}
      ]}).select('name pax date time')
    return data;
  }catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch latest bookings data.');
  }
}

const ITEMS_PER_PAGE = 6;


// export async function fetchFilteredBookings(
//   query: string,
//   currentPage: number,
// )  {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const bookings = await Booking.find()
//   } catch(error) {

//   }

// }

export async function fetchBookingsPages() {

}


export async function fetchBookingById(id: string) {
  await dbConnect();

  try {
    const booking = await Booking.findById(id);

    return booking
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch booking.');  
  }
}

export async function fetchEvents() {
  await dbConnect();

  try {
    const events = await Events.find({})

    return events
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch events.');   }
}

export async function fetchEventById(id: string) {
  await dbConnect();

  try {
    const event = await Events.findById(id);

    return event
  } catch(error) {
    console.error('Database Error', error);
    throw new Error('Failed to fetch Event')
  }
}

export async function fetchBookingsToday() {
  await dbConnect();

  const today = new Date().toISOString().split('T')[0];

  try {
    const data = await Booking.find({      
      $and: [
          {date: {$gte : today}},
          {date: {$lte : today}}
      ]}).select('name pax date time')
    return data;
  }catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch latest bookings data.');
  }
}

export async function fetchCardData() {
  try {
    const reservationsThisWeek = (await fetchLatestBookings()).length
    const totalReservations = await Booking.countDocuments()
    const totalEvents = await Events.countDocuments()
    const bookingsToday = (await fetchBookingsToday()).length
    return {
      totalReservations,
      totalEvents,
      reservationsThisWeek,
      bookingsToday
    }
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card Data.');  
  }
}


// export async function fetchCardData() {
//   try {
//     // You can probably combine these into a single SQL query
//     // However, we are intentionally splitting them to demonstrate
//     // how to initialize multiple queries in parallel with JS.
//     const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
//     const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
//     const invoiceStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//          SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
//          FROM invoices`;

//     const data = await Promise.all([
//       invoiceCountPromise,
//       customerCountPromise,
//       invoiceStatusPromise,
//     ]);

//     const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
//     const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
//     const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
//     const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

//     return {
//       numberOfCustomers,
//       numberOfInvoices,
//       totalPaidInvoices,
//       totalPendingInvoices,
//     };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch card data.');
//   }
// }



// export async function fetchBookingsPages(query: string) {
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       invoices.amount::text ILIKE ${`%${query}%`} OR
//       invoices.date::text ILIKE ${`%${query}%`} OR
//       invoices.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of invoices.');
//   }
// }


// export async function fetchFilteredCustomers(query: string) {
//   try {
//     const data = await sql<CustomersTableType>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(invoices.id) AS total_invoices,
// 		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN invoices ON customers.id = invoices.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.rows.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }
