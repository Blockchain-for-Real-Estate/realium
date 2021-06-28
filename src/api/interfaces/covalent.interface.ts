export interface GetERC20TokenTransfers{
   "data": {
   "address": string,
   "updated_at": Date,
   "next_update_at": Date,
   "quote_currency": string,
   "chain_id": number,
   "items": [
     {
        "block_signed_at": Date,
        "block_height": number,
        "tx_hash": string,
        "tx_offset": number,
        "successful": boolean,
        "from_address": string,
        "from_address_label": string,
        "to_address": string,
        "to_address_label": string,
        "value": string,
        "value_quote": string,
        "gas_offered": number,
        "gas_spent": number,
        "gas_price": number,
        "gas_quote": number,
        "gas_quote_rate": number,
        "transfers": [
          Transfer
        ]
      }
    ],
    "pagination": {
      "has_more": boolean,
      "page_number": number,
      "page_size": number,
      "total_count": number
    }
  },
  "error": boolean,
  "error_message": string,
  "error_code": number
}

export interface Transfer{
    "block_signed_at": Date,
    "tx_hash": string,
    "from_address": string,
    "from_address_label": null,
    "to_address": string,
    "to_address_label": string,
    "contract_decimals": number,
    "contract_name": string,
    "contract_ticker_symbol": string,
    "contract_address": string,
    "logo_url": "",
    "transfer_type": string,
    "delta": string,
    "balance": number,
    "quote_rate": number,
    "delta_quote": number,
    "balance_quote": number
}