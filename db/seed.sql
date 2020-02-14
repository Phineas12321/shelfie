CREATE TABLE inventory (
    inventory_id SERIAL PRIMARY KEY,
    image_url VARCHAR(250),
    product_name VARCHAR(50),
    price NUMERIC(8, 2)
)