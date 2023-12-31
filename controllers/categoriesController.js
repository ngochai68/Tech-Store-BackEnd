const Category = require('../models/Category');

async function getAllCategories(req, res, next) {
  try {
    const categories = await Category.getCategories();
    const message = 'Categories retrieved successfully.';
    res.json({ message, categories });
  } catch (error) {
    next(error);
  }
}

async function getCategoryById(req, res, next) {
  try {
    const category = await Category.getCategoryById(req.params.categoryId);
    const message = 'Category retrieved successfully.';
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message, category });
  } catch (error) {
    next(error);
  }
}

async function createCategory(req, res, next) {
  try {
    const categoryId = await Category.createCategory(req.body);
    const message = 'Category created successfully.';
    res.status(201).json({ categoryId, message });
  } catch (error) {
    next(error);
  }
}

async function updateCategory(req, res, next) {
  try {
    await Category.updateCategory(req.params.categoryId, req.body);
    const message = 'Category updated successfully.';
    res.status(204).json({ message });
  } catch (error) {
    next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    await Category.deleteCategory(req.params.categoryId);
    const message = 'Category updated successfully.';
    res.status(204).json({ message });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
