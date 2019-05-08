insert into private (
    card,
    expire,
    code
) values (
    ${hashCard},
    ${hashExpire},
    ${hashCode}
)
returning private_id;