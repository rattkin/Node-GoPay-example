/**
 * Create standard, recurring or pre-authorized payment
 * @param array 
 * @param $payment 
 */
export function createPayment(array $payment): void { 

}

/**
 * Status of the payment
 * @param $id 
 */
export function getStatus($id): void { 
  
}

/**
 * Refund of the payment
 * @param $id 
 * @param $amount 
 */
export function refundPayment($id, $amount): void { 
  
}

/**
 * Recurring payment on demand
 * @param $id 
 * @param array 
 * @param $payment 
 */
export function createRecurrence($id, array $payment): void { 
  
}

/**
 * Cancellation of the recurring payment
 * @param $id 
 */
export function voidRecurrence($id): void { 
  
}

/**
 * Charge of pre - authorized payment
 * @param $id 
 */
export function captureAuthorization($id): void { 
  
}

/**
 * Cancellation of the pre - authorized payment
 * @param $id 
 */
export function voidAuthorization($id): void { 
  
}