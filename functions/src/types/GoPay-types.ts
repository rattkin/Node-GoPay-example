export type GoPayConfiguration = {
  /**
   * default GoPay account used in createPayment if target is not specified
   */
  goid: string;
  /**
   * https://doc.gopay.com/en/?shell#oauth
   */
  clientId: string;
  /**
   * https://doc.gopay.com/en/?shell#oauth
   */
  clientSecret: string;
  isProductionMode: boolean;
  /**
   * token scope
   * https://doc.gopay.com/en/?shell#scope
   */
  scope?: "payment-create" | "payment-all";
  /**
   * language used in createPayment if lang is not specified
   * also used for localization of errors https://doc.gopay.com/en/?shell#return-errors
   */
  language?: GoPayLanguage
  /**
   * Browser timeout in seconds
   */
  timeout?: number
}

export type GoPayPaymentRequest = {
  "payer": payer,
  "target": {
    "type": "ACCOUNT",
    "goid": string
  },
  "amount": number,
  "currency": "CZK",
  "order_number": cartData.OrderId,
  "items": items[]
  "callback": {
    "return_url": returnUrl + 'kosik/potvrzeno?cart=' + cartData.CartSignature,
      "notification_url": notificationUrl + '?cart=' + cartData.CartSignature,
},
"lang": "cs"
}

/**
 * Information about electronic money account
 */
export type accounts = {
  /**
   * ID of account
   */
  "id": number,
  /**
   * Balance of account
   */
  "balance": number,
  /**
   * Currency of payment, format corresponds to ISO 4217, uppercase
   */
  "currency": string,
}

/**
 * https://doc.gopay.com/en/#address
 */
export type address = {
  "street": string,
  "postal_code": string,
  "city": string,
  /**
   * Country code	ISO 3166-2, all lowercase
   */
  "country": string
}

/**
 * Definition of the payer or the payment
 * https://doc.gopay.com/en/#payer
 */
export type payer = {
  /**
   * Array of allowed payment methods
   */
  "allowed_payment_instruments": payment_instrument,
  /**
   * Preferred payment method
   */
  "default_payment_instrument": payment_instrument,
  /**
   * Preferred bank if default_payment_instrument is set to BANK_ACCOUNT, set by SWIFT code
   */
  "default_swift"?: SWIFT,
  /**
   * Array of allowed bank codes
   */
  "allowed_swifts"?: SWIFT[],
  /**
   * Bank account information
   */
  "bank_account": bank_account,
  /**
   * Payment card information
   */
  payment_card: payment_card
  "contact": contact,
  /**
   * PIN for identification payment purposes
   * https://doc.gopay.com/en/#identification-payment
   */
  "verify_pin"?: string,
  "allowed_card_token"?: string,
}

/**
 * https://doc.gopay.com/en/#bank-account
 */
export type bank_account = {
  /*
  *International bank account, 50 characters
  */
  "iban": string,
  /*
  *Business identification code (SWIFT), 11 characters
  */
  "bic": string,
  /*
  *Bank account prefix, 64 characters
  */
  "prefix": string,
  /*
  *Bank account number, 128 characters
  */
  "account_number": string,
  /*
  *Bank account code, 8 characters
  */
  "bank_code": string,
  /*
  *Bank account name, 70 characters
  */
  "account_name": string,
}

/**
 * https://doc.gopay.com/en/#payment-card
 */
export type payment_card = {
  "card_number": string,
  "card_expiration": string,
  "card_brand": string,
  "card_issuer_country": string,
  "card_issuer_bank": string,
}

/**
 * Due to update to 3DSv2, it is now mandatory to pass the contact object in the payer object in every payment creation request. The object has to contain true information about the payer. Every parameter of the payer object is required.
 * https://doc.gopay.com/en/#contact
 */
export type contact = {
  "first_name": string,
  "last_name": string,
  "email": string,
  "phone_number": string,
  "city": string,
  "street": string,
  "postal_code": string,
  "country_code": string,
}

/**
 * Identification of the payee
 * https://doc.gopay.com/en/#target
 */
export type target = {
  "type": "ACCOUNT",
  "goid": number,
}

/**
 * Each item of the order
 * https://doc.gopay.com/en/#items
 */
export type items = {
  "type": GoPayPaymentItemType,
  "product_url": string,
  "ean"?: string,
  "count": number,
  "name": string,
  "amount": number,
  "vat_rate": GoPayVatRate
}

export type GoPayLanguage = "CS" | "EN" | "SK" | "DE" | "RU" | "PL" | "HU"
  | "FR" | "RO" | "BG" | "HR" | "IT" | "ES";

export enum SWIFT {
  "CESKA_SPORITELNA" = "GIBACZPX",
  "KOMERCNI_BANKA" = "KOMBCZPP",
  "RAIFFEISENBANK" = "RZBCCZPP",
  "MBANK" = "BREXCZPP",
  "FIO_BANKA" = "FIOBCZPP",
  "CSOB" = "CEKOCZPP",
  "ERA" = "CEKOCZPP-ERA",
  "UNICREDIT_BANK_CZ" = "BACXCZPP",
  "VSEOBECNA_VEROVA_BANKA_BANKA" = "SUBASKBX",
  "TATRA_BANKA" = "TATRSKBX",
  "UNICREDIT_BANK_SK" = "UNCRSKBX",
  "SLOVENSKA_SPORITELNA" = "GIBASKBX",
  "POSTOVA_BANKA" = "POBNSKBA",
  "CSOB_SK" = "CEKOSKBX",
  "SBERBANK_SLOVENSKO" = "LUBASKBX",
  "SPECIAL" = "OTHERS",
  "MBANK1" = "BREXPLPW",
  "CITI_HANDLOWY" = "CITIPLPX",
  "IKO" = "BPKOPLPW-IKO",
  "INTELIGO" = "BPKOPLPW-INTELIGO",
  "PLUS_BANK" = "IVSEPLPP",
  "BANK_BPH_SA" = "BPHKPLPK",
  "TOYOTA_BANK" = "TOBAPLPW",
  "VOLKSWAGEN_BANK" = "VOWAPLP1",
  "SGB" = "GBWCPLPP",
  "POCZTOWY_BANK" = "POCZPLP4",
  "BGZ_BANK" = "GOPZPLPW",
  "IDEA" = "IEEAPLPA",
  "BPS" = "POLUPLPR",
  "GETIN_ONLINE" = "GBGCPLPK-GIO",
  "BLIK" = "GBGCPLPK-BLIK",
  "NOBLE_BANK" = "GBGCPLPK-NOB",
  "ORANGE" = "BREXPLPW-OMB",
  "BZ_WBK" = "WBKPPLPP",
  "RAIFFEISEN_BANK_POLSKA_SA" = "RCBWPLPW",
  "POWSZECHNA_KASA_OSZCZEDNOSCI_BANK_POLSKI_SA" = "BPKOPLPW",
  "ALIOR_BANK" = "ALBPPLPW",
  "ING_BANK_SLASKI" = "INGBPLPW",
  "PEKAO_SA" = "PKOPPLPW",
  "GETIN_ONLINE1" = "GBGCPLPK",
  "BANK_MILLENNIUM" = "BIGBPLPW",
  "BANK_OCHRONY_SRODOWISKA" = "EBOSPLPW",
  "BNP_PARIBAS_POLSKA" = "PPABPLPK",
  "CREDIT_AGRICOLE" = "AGRIPLPR",
  "DEUTSCHE_BANK_POLSKA_SA" = "DEUTPLPX",
  "DNB_NORD" = "DNBANOKK",
  "E_SKOK" = "NBPLPLPW",
  "EUROBANK" = "SOGEPLPW",
  "POLSKI_BANK_PRZEDSIEBIORCZOSCI_SPOLKA_AKCYJNA" = "PBPBPLPW",
}

export enum GoPayCurrency {
  "CZECH_CROWNS" = "CZK",
  "EUROS" = "EUR",
  "POLISH_ZLOTY" = "PLN",
  "HUNGARIAN_FORINT" = "HUF",
  "BRITISH_POUND" = "GBP",
  "US_DOLLAR" = "USD",
  "ROMANIAN_LEU" = "RON",
  "KUNA" = "HRK",
  "BULGARIAN_LEV" = "BGN",
}

export type payment_instrument =
  "PAYMENT_CARD" |
  "BANK_ACCOUNT" |
  "PRSMS" |
  "MPAYMENT" |
  "PAYSAFECARD" |
  "SUPERCASH" |
  "GOPAY" |
  "PAYPAL" |
  "BITCOIN" |
  "ACCOUNT" |
  "GPAY" |
  "APPLE_PAY";


export type GoPayPaymentItemType =
  "ITEM" |
  "DISCOUNT" |
  "DELIVERY";

export type GoPayRecurrence =
  "DAY" |
  "WEEK" |
  "MONTH" |
  "ON_DEMAND";

export enum GoPayVatRate {
  "RATE_1" = 0,
  "RATE_2" = 10,
  "RATE_3" = 15,
  "RATE_4" = 21,
}

