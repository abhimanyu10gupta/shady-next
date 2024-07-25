import bcrypt from 'bcrypt';
import { customers, revenue, users, bookings, events } from '../lib/placeholder-data';
import User from '@/models/user';
import dbConnect from '../lib/dbConnect';
import Booking from '@/models/booking';
import Events from '@/models/event';

async function seedUsers() {

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      return User.create({name: user.name, email:user.email, password:hashedPassword});

    }),
  );

  return insertedUsers;
}

async function seedBookings() {
  const insertedBookings = await Promise.all(
    bookings.map(async(booking)=> {
      return Booking.create(booking);
    })
  )

  return insertedBookings;
}

async function seedMenuItems() {

}

async function seedEvents() {
  
  const insertedEvents = await Promise.all(
    
    events.map(async(event) => {
      console.log(event)
      return Events.create(event);
    })
  )

  return insertedEvents;
}

export async function GET() {
  await dbConnect();

  try {
    // await seedUsers();
    // await seedBookings();
    // await seedMenuItems();
    // console.log(await seedEvents());
    await seedEvents();
    return Response.json({ message: 'Database seeded successfully' });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}


