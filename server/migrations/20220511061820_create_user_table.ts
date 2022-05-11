import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw(`
    create table if not exists users(
      id serial not null,
      email varchar(100) not null,
      phone varchar(13),
      first_name varchar(50),
      last_name varchar(50),
      status boolean,
      role_id int not null primary key
    );
  `);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export async function down(): Promise<void> {}
