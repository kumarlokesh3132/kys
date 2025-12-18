import * as service from "../services/ingredient.service.js";

export const getAllIngredients = async (req, res) => {
  try {
      const { search } = req.query;

    const data = await service.getAllIngredientsService(search);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

