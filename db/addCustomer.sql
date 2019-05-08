insert into customer (
    firstname,
    lastname,
    company,
    mobile_phone,
    home_phone, 
    email
) values (
    ${firstname}
    ${lastname}
    ${company}
    ${mobile_phone}
    ${home_phone}
    ${email}
);
insert into customer_address (
    address,
    city,
    state,
    zipcode,
    country
) values (
    ${shipping_address}
    ${shipping_city}
    ${shipping_state}
    ${shipping_zipcode}
    ${shipping_country}
);
insert into customer_address (
    address,
    city,
    state,
    zipcode,
    country
) values (
    ${billing_address}
    ${billing_city}
    ${billing_state}
    ${billing_zipcode}
    ${billing_country}
);
insert into private (
    card,
    expire,
    code
) values (
    ${card}
    ${expire}
    ${code}
);