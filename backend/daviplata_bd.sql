-- comando para docker
-- docker run --name daviplata -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=9Lk3NJms2P -e POSTGRES_DB=daviplata -p 5432:5432 -d postgres
CREATE TABLE USERS (
    id_user UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dui VARCHAR(9) UNIQUE NOT NULL,
    name VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(12) UNIQUE NOT NULL,
    password VARCHAR(16) NOT NULL
);

CREATE TABLE ACCOUNT (
    id_account UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    account_number VARCHAR(20) NOT NULL,
    money_ NUMERIC(12,2),
    id_user UUID NOT NULL,
    FOREIGN KEY(id_user) REFERENCES USERS(id_user) ON DELETE CASCADE
);

CREATE TABLE BUDGET (
    id_budget UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    total_budget NUMERIC(12,2),
    id_user UUID NOT NULL,
    FOREIGN KEY (id_user) REFERENCES USERS(id_user) ON DELETE CASCADE
);

CREATE TABLE CATEGORY (
    id_category UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(15)
);

CREATE TABLE SERVICE (
    id_service UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(15) NOT NULL,
    amount NUMERIC(12,2) NOT NULL,
    isBlocked BOOLEAN NOT NULL,
    date_ DATE NOT NULL,
    id_category UUID NOT NULL,
    id_budget UUID NOT NULL,
    FOREIGN KEY (id_category) REFERENCES CATEGORY(id_category) ON DELETE CASCADE,
    FOREIGN KEY (id_budget) REFERENCES BUDGET(id_budget) ON DELETE CASCADE
);

CREATE TABLE SESSION (
    id_session UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    code VARCHAR(8) NOT NULL,
    total NUMERIC(12,2) NULL,
    status BOOLEAN NOT NULL DEFAULT TRUE
    id_user_host UUID NOT NULL,
    FOREIGN KEY (id_user_host) REFERENCES USERS(id_user) ON DELETE CASCADE
);

CREATE TABLE USERXSESSION (
    id_userxsession UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    id_user UUID NOT NULL,
    id_session UUID NOT NULL,
    FOREIGN KEY (id_user) REFERENCES USERS(id_user) ON DELETE CASCADE,
    FOREIGN KEY (id_session) REFERENCES SESSION(id_session) ON DELETE CASCADE
);

CREATE TABLE TRANSFER_STATUS (
    id_status SERIAL PRIMARY KEY,
    name VARCHAR(12) UNIQUE NOT NULL
);

CREATE TABLE TRANSFER (
    id_transfer UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    date_transfer TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount NUMERIC(12,2) NOT NULL,
    id_status UUID NOT NULL,
    id_user_transmitter UUID NOT NULL,
    id_user_receiver UUID NOT NULL,
    FOREIGN KEY (id_status) REFERENCES TRANSFER_STATUS(id_status) ON DELETE CASCADE,
    FOREIGN KEY (id_user_transmitter) REFERENCES USERS(id_user) ON DELETE CASCADE,
    FOREIGN KEY (id_user_receiver) REFERENCES USERS(id_user) ON DELETE CASCADE
);

CREATE TABLE TOKEN (
    id_token UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_user UUID NOT NULL,
    FOREIGN KEY (id_user) REFERENCES USERS(id_user) ON DELETE CASCADE
);

--Estados de transferencia
INSERT INTO TRANSFER_STATUS (status_name) VALUES ('Pending'), ('Completed'), ('Failed');

--Tipos de categoria
INSERT INTO CATEGORY (name_category) VALUES
    ('Comida'),
    ('Transporte'),
    ('Servicios'),
    ('Salud'),
    ('Gastos estudiantiles'),
    ('Vivienda'),
    ('Personal'),
    ('Gastos varios');


/*Cuentas de prueba
-- Cuenta 1
INSERT INTO USERS (dui, name, lastname, email, phone, password)
VALUES ('001234567', 'Juan', 'Pérez', 'juan@example.com', '777-1234-5678', 'password1');

-- Cuenta 2
INSERT INTO USERS (dui, name, lastname, email, phone, password)
VALUES ('002345678', 'María', 'Rodríguez', 'maria@example.com', '777-2345-6789', 'password2');

-- Cuenta 3
INSERT INTO USERS (dui, name, lastname, email, phone, password)
VALUES ('003456789', 'José', 'López', 'jose@example.com', '777-3456-7890', 'password3');

-- Cuenta 4
INSERT INTO USERS (dui, name, lastname, email, phone, password)
VALUES ('004567890', 'Ana', 'García', 'ana@example.com', '777-4567-8901', 'password4');

-- Cuenta 5
INSERT INTO USERS (dui, name, lastname, email, phone, password)
VALUES ('005678901', 'Carlos', 'Martínez', 'carlos@example.com', '777-5678-9012', 'password5');
*/
comida,transporte,servicios,salud,gastos estudiantiles,vivienda,personal,gastos varios


