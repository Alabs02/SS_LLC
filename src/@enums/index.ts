enum DELIVERY_STATUS {
  IN_TRANSIT,
  DELIVERED,
  UNKNOWN,
}

enum DELIVERY_STATUS_FILTER {
  IN_TRANSIT,
  DELIVERED,
  UNKNOWN,
  ALL,
}

enum DELIVERY_OPTIONS {
  OFFICE_PICKUP,
  DOOR_STEP_DELIVERY,
}

enum PAYMENT_STATUS_FILTER {
  ALL,
  PAID,
  UNPAID,
  PENDING,
  PARTIAL,
}

enum PAYMENT_STATUS_CHOICE {
  PAID,
  UNPAID,
  PENDING,
  PARTIAL,
}

export {
  DELIVERY_STATUS,
  DELIVERY_OPTIONS,
  PAYMENT_STATUS_FILTER,
  PAYMENT_STATUS_CHOICE,
  DELIVERY_STATUS_FILTER,
};
