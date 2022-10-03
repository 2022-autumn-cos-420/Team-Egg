
REVOKE ALL
ON ALL TABLES IN SCHEMA public 
FROM PUBLIC;

DROP OWNED BY blackbear;

DROP DATABASE IF EXISTS blackbear;
DROP ROLE IF EXISTS blackbear;

CREATE USER blackbear LOGIN PASSWORD 'cos420Blackbear';
CREATE DATABASE blackbear OWNER blackbear;

\c blackbear
CREATE TABLE user_account (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR (50) UNIQUE NOT NULL,
	password VARCHAR (255) NOT NULL,
	email VARCHAR (255) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP
);


GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO blackbear;

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public 
TO blackbear;