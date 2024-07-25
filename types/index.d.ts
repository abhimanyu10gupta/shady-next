declare interface MenuItemProps {
    // _id: Schema.Types.ObjectId,
    name: string;
    description: string;
    price: string;
  }

  declare interface UserProps {
    _id: Schema.Types.ObjectId,
    name: string;
    email: string;
    password: string;
  }

declare interface BookingProps {
  // _id: Schema.Types.ObjectId,
  name: string;
  date: string;
  time: string;
  pax: string;
  phone: string;
}

declare interface EventProps {
  _id: Schema.Types.ObjectId,
  title: string,
  description: string,
  time:string,
  image: string;
}

declare interface OrderProps {
  tableNumber: string;
  
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],
}

