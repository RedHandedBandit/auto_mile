insert into employee_login (
    firstname, lastname, username, email, hash 
) values (
    ${firstname},
    ${lastname},
    ${username},
    ${email},
    ${hashNewPassword}
) where login_id = ${id};