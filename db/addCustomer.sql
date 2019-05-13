insert into customer (
    firstname,
    lastname,
    company,
    mobile_phone,
    home_phone, 
    billing_address_id,
    home_address_id,
    email
) values (
    ${firstname},
    ${lastname},
    ${company},
    ${mobile_phone},
    ${home_phone},
    ${billing_id},
    ${shipping_id},
    ${email}
);