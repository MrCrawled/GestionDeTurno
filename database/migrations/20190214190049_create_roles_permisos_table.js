exports.up = (knex, Promise) => {
    return Promise.all ([
    knex.schema.createTable('roles_permisos', table =>{
        table.increments('id').primary();
        table.integer('id_rol').references('roles.id').notNullable();
        table.integer('id_permiso').references('permisos.id').notNullable();
      })
    ]); 
};

exports.down = (knex, Promise)  => {
    return Promise.all ([knex.schema.dropTable('roles_permisos')]); 
};