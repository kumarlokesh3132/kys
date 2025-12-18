import express from "express";
import productRoutes from "./routes/product.routes.js";
import brandRoutes from "./routes/brand.routes.js";
import ingredientRoutes from "./routes/brand.routes.js";
import commonRoutes from "./routes/common.routes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/products", productRoutes);

app.use("/brands", brandRoutes);

app.use("/ingredients", ingredientRoutes);

app.use("/", commonRoutes);

export default app;


//===========  Product filtering examples ===========//
// get all products: http://localhost:8000/products
// getProduct by id: http://localhost:8000/products?id=1009
// getProduct by brand: http://localhost:8000/products?brand=someBrand
// getProduct by category: http://localhost:8000/products?category=someCategory
// getProduct by search text: http://localhost:8000/products?search=someText
// getProduct by pagination: http://localhost:8000/products?page=1&limit=20
// Multiple filters can be applied together: http://localhost:8000/products?brand=someBrand1,someBrand2&category=someCategory1,someCategory2&search=someText&page=2&limit=10&id=100

// get products by ingredient name and dosage: http://localhost:8000/products/byIngredient?name=Acai&dosage=HIGH

// =========== get Brands ===========//
// example: http://localhost:8000/brands/
// example with search param: http://localhost:8000/brands?search=gn


// =========== get Product Names by Brand Name ===========//
// example: http://localhost:8000/products/productNames?brandName=someBrand


// =========== get Category Names ===========//
// example: http://localhost:8000/getCategoryNames


// =========== get Ingredients ===========//
// example: http://localhost:8000/ingredients/
// example with search param: http://localhost:8000/ingredients?search=rose
