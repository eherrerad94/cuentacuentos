import express from 'express'
import { Category } from '../models'

export const listCategories = async ( req, res, next ) => {
    try {
        const categoryList = await Category.find()
        res.status(200).json(categoryList)
    } catch (error) {
        next(error)
    }
}

export const getCategory = async ( req, res, next ) => {
    const { params: { id } } = req
    try {
        const category = await Category.findById(id)
        res.status(200).json(category)
    } catch (error) {
        next(error)
    }   
}

export const addCategory = async ( req, res, next ) => {
    const { body } = req
    const newCategory = new Category(body)
    try {
        const category = await newCategory.save()
        res.status(201).json(category);
    } catch (error) {
        next(error)
    }
}

export const updateCategory = async ( req, res, next ) => {
    const { params: { id }, body } = req
    try {
        const category = await Category.findByIdAndUpdate(id, body)
        res.status(200).json(category)
    } catch (error) {
        next(error)
    }
}

export const deleteCategory = async ( req, res, next ) => {
    const { params: { id }, body } = req
    try {
        const category = await Category.findByIdAndRemove(id)
        res.status(200).json(category)
    } catch (error) {
        next(error)
    }
}