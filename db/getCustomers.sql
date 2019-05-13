select * from customer c
     join private p 
        on p.private_id = c.private_id
     join customer_address ca 
        on ca.address_id = c.billing_address_id
    join customer_address cc   
        on cc.address_id = c.home_address_id;