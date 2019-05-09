update employee_login 
    set firstname = ${firstname},
        lastname = ${lastname},
        username = ${username},
        email = ${email},
        hash = ${hashNewPassword}
    where login_id = ${id};
