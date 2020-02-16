CREATE TABLE inventory (
    inventory_id SERIAL PRIMARY KEY,
    image_url TEXT,
    product_name VARCHAR(50),
    price NUMERIC(8, 2)
)