insert into employee_login (
    firstname,
    lastname,
    username,
    email,
    hash
) values (
    ${firstname},
    ${lastname},
    ${username},
    ${email},
    ${hash}
)
returning *;