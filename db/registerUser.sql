insert into employee_login (
    firstname,
    lastname,
    phone,
    username,
    email,
    hash
) values (
    ${firstname},
    ${lastname},
    ${phone},
    ${username},
    ${email},
    ${hash}
)
returning *;