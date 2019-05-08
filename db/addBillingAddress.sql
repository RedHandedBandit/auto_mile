insert into customer_address (
    address,
    city,
    state,
    zipcode,
    country
) values (
    ${billing_addy},
    ${billing_city},
    ${billing_state},
    ${billing_zipcode},
    ${billing_country}
)
returning address_id;