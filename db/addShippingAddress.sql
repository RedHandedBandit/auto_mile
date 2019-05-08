insert into customer_address (
    address,
    city,
    state,
    zipcode,
    country
) values (
    ${shipping_addy},
    ${shipping_city},
    ${shipping_state},
    ${shipping_zipcode},
    ${shipping_country}
)
returning address_id;