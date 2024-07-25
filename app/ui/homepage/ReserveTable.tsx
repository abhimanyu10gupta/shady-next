"use client"

import { partySizeArr, times } from '@/constants';

import React, { useActionState } from 'react'

import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { reserveTableSchema } from '@/app/lib/utils';
// import { toast } from "@/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { revalidatePath } from 'next/cache';
import { BookingState, createBooking, createReservation } from '@/app/lib/actions';


const ReserveTable = () => {

  const [partySize, setPartySize] = React.useState('');
  const [time, setTime] = React.useState('');
  const formSchema = reserveTableSchema();
  const [date, setDate] = React.useState<Date>()
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
 })

function onSubmit(data: z.infer<typeof formSchema>) {
  console.log("haha")
  console.log(JSON.stringify(data) + "asdlkjflaksdjflkdsjlkfsjlksdjflksjdlkfj")
  setLoading(true)



    const { name, pax, time, phone, date } = data

    date.setDate(date.getDate() + 1)
    const formatDate = date.toISOString().split('T')[0];

    const booking = { 
        name: name,
        pax: pax,
        time: time,
        phone: phone,
        date: formatDate,
    }

    createReservation(booking)

    const apiEndpoint = "/api/email"

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  .catch((err) => {
        alert(err);
      });
}

const yesterday = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);

  return (
    <div className='w-screen flex justify-center p-5 pt-20 pb-20 font-bold md:p-24 flex-col '>
     <div className='w-full flex justify-center'>
        <p className=' text-6xl '>
          Reserve a Table
        </p>
      </div>

      {(!loading)?
      <div className='flex w-full justify-center pt-16 md:p-32 md:flex-col m-auto'>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='flex flex-col sm:flex-row justify-evenly'>
          <div className="pb-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder= "" {...field} className='' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="pt-2">
          <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

           
        </div>
        <div className='flex flex-col sm:flex-row'>
        <div className='flex basis-1/5 flex-col justify-center m-auto' >
          <div className=' flex justify-center'>
            <FormField
            control={form.control}
            name="pax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Party Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="2" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {partySizeArr.map((size) => (
                      <SelectItem value={size} key={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            />
          </div>
          </div>
          <div className='flex basis-1/5 flex-col m-auto'>
            <div className='flex justify-center'>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-black" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < yesterday || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex basis-1/5 flex-col m-auto'>
            <div className='flex justify-center'>
            <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="2:00 PM" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {times.map((time) => (
                      <SelectItem value={time} key={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            />
            </div>
          </div>
        </div>
        
        <div className='flex basis-1/5 justify-center items-center' >
          <Button type="submit" variant="outline">Reserve Table</Button>
        </div>
          </form>
        </Form>

      </div>
      : 
    
    (<div>
      <div className='flex justify-center p-12'>
        <p className=' '>
          Thank you. Your reservation has been submitted. We will be in touch soon for confirmation. 
        </p>
      </div>
    </div>)}
   

    </div>
    
    
  ) }

export default ReserveTable