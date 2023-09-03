import {createPool} from 'mysql2/promise';

export const pool = createPool({
  host: 'sql10.freesqldatabase.com',
  user: 'sql10644241',
  password: '2NU1HLxzae',
  port: 3306,
  database: 'sql10644241'
})