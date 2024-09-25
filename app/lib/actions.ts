'use server';
import { z } from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from './dbConnect';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import  Booking from '@/models/booking';
import  Events  from '@/models/event';
import { reserveTableSchema } from '@/app/lib/utils';

const BookingFormSchema = z.object({
  name: z.string({
    invalid_type_error: 'Please enter a name.',
  }),
  pax: z.string({
    invalid_type_error: 'Please enter the number of guests.',
  }),
  time: z.string({
    invalid_type_error: 'Please enter a time.',
  }),
  date: z.string({
    invalid_type_error: 'Please select a date.',
  }),
  phone: z.string({
    invalid_type_error: 'Please enter a phone number.',
  }),
  // pax: z.coerce
  //   .number()
  //   .gt(0, { message: 'Please enter an amount greater than $0.' }),
  // status: z.enum(['pending', 'paid'], {
  //   invalid_type_error: 'Please select an invoice status.',
  // }),
  // date: z.string(),
});
const EventFormSchema = z.object({
  title: z.string({
    invalid_type_error: 'Please enter a title.',
  }),
  description: z.string({
    invalid_type_error: 'Please enter a description.',
  }),
  time: z.string({
    invalid_type_error: 'Please enter a time.',
  }),
  image: z.string({
    invalid_type_error: 'Please enter an image path.',
  }),
});

const CreateInvoice = BookingFormSchema.omit({});

export type BookingState = {
  errors?: {
    name?: string[];
    pax?: string[];
    time?: string[];
    date?: string[];
    phone?: string[];
    // title?: string[];
    // description?: string[];

  };
  message?: string | null;
};

export type EventState = {
  errors? : {
    title? : string[];
    description? : string[];
    time? : string[];
    image? : string[],
  }
  message? : string | null;

}


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const CreateBooking = BookingFormSchema.omit({});
const CreateEvent = EventFormSchema.omit({});

export async function createEvent(prevState: EventState, formData: FormData) {
  const validatedFields = CreateEvent.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    time: formData.get('time'),
    image: formData.get('image')
  })


  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Booking.',
    }
  }
  await dbConnect()

  try {
    await Events.create(validatedFields.data)

  } catch(error) {
      return {
      message: 'Database Error: Failed to Create Event.',
    };
  }
  revalidatePath('/dashboard/events')
  redirect('/dashboard/events');
}


export async function createReservation(booking: BookingProps) {
  console.log(booking)
await dbConnect()
  try {
    await Booking.create(booking)
  } catch(error) {
    return {
      message: 'Database Error: Failed to Create Booking.',
    };
  }
  revalidatePath('/dashboard/bookings')
}



export async function createBooking(prevState: BookingState, formData: FormData) {
  // const bookingEventEmitter = Booking.watch()
  // bookingEventEmitter.on('insert', change => console.log("here change", JSON.stringify(change)))
  const validatedFields = CreateBooking.safeParse({
    name : formData.get('name'),
    pax : formData.get('pax'),
    time : formData.get('time'),
    date : formData.get('date'),
    phone: formData.get('phone'),
  })

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Booking.',
    }
  }

  await dbConnect()
  try {
    await Booking.create(validatedFields.data)
  } catch(error) {
    return {
      message: 'Database Error: Failed to Create Booking.',
    };
  }
  revalidatePath('/dashboard/bookings')
  redirect('/dashboard/bookings');
}
// export async function createBookings(prevState: State, formData: FormData) {
//   const validatedFields = CreateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Create Invoice.',
//     };
//   }
//   const { customerId, amount, status } = validatedFields.data;

//   const amountInCents = amount * 100;
//   const date = new Date().toISOString().split('T')[0];

//   try {
//     await sql`
//       INSERT INTO invoices (customer_id, amount, status, date)
//       VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//     `;
//   } catch (error) {
//     return {
//       message: 'Database Error: Failed to Create Invoice.',
//     };
//   }
//   revalidatePath('/dashboard/invoices')
//   redirect('/dashboard/invoices');

// }

const UpdateEvents = EventFormSchema.omit({});

export async function updateEvent(id: string, prevState: EventState, formData: FormData) {
  const validatedFields = UpdateEvents.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    time: formData.get('time'),
    image: formData.get('image')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Event.',
    };
  }

  await dbConnect();
  try {
    await Events.findByIdAndUpdate(id, validatedFields.data)

  } catch (error) {
       return { message: 'Database Error: Failed to Update Event.' };

  }
  revalidatePath('/dashboard/events');
  revalidatePath('/')
  redirect('/dashboard/events');
}

const UpdateBooking = BookingFormSchema.omit({ });

export async function updateBooking(id: string, prevState: BookingState, formData: FormData) {
    const validatedFields = UpdateBooking.safeParse({
      name : formData.get('name'),
      pax : formData.get('pax'),
      time : formData.get('time'),
      date : formData.get('date'),
      phone: formData.get('phone'),

  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Booking.',
    };
  }
  await dbConnect();

  try {
    await Booking.findByIdAndUpdate(id, validatedFields.data)

  } catch (error) {
       return { message: 'Database Error: Failed to Update Booking.' };

  }
  revalidatePath('/dashboard/bookings');
  redirect('/dashboard/bookings');
}
// export async function updateBooking(id: string, prevState: State, formData: FormData) {
//   const validatedFields = UpdateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });
 
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Update Invoice.',
//     };
//   }
 
//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;
//   try {
//     await sql`
//         UPDATE invoices
//         SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//         WHERE id = ${id}
//       `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update Invoice.' };
//   }
 
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
// }

export async function deleteBooking(id:string) {
  await dbConnect();
  try {
    await Booking.findByIdAndDelete(id);
    revalidatePath('/dashboard/bookings')
    return {message:"deleted booking"}
  } catch(error) {
    return {
      message: "Database Error: Failed to delete Booking"
    }
  }
}

// export async function deleteBooking(id: string) {
//   try {
//     await sql`DELETE FROM invoices WHERE id = ${id}`;
//     revalidatePath('/dashboard/invoices');
//     return { message: 'Deleted Invoice.' };
//   } catch (error) {
//     return { message: 'Database Error: Failed to Delete Invoice.' };
//   }
// }


// updatehomepage or update events + updateFunctions?? 

export async function updateFunctions() {

}



export async function createFunctionsPage() {

}

export async function deleteEvent(id:string) {

  await dbConnect();
  console.log(id)
  try {
    await Events.findByIdAndDelete(id);
    revalidatePath('/dashboard/events')
    return {message:"deleted event"}
  } catch(error) {
    return {
      message: "Database Error: Failed to delete event"
    }
  }
}
