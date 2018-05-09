import express from 'express'
import { Story } from '../models'

export const listStories = async ( req, res, next ) => {
    try {
        const storyList = await Story.find()
        res.status(200).json(storyList)
    } catch (error) {
        next(error)
    }
}

export const getStory = async ( req, res, next ) => {
    const { params: { id } } = req
    try {
        const story = await Story.findById(id)
        res.status(200).json(story)
    } catch (error) {
        next(error)
    }   
}

export const addStory = async ( req, res, next ) => {
    const { body } = req
    const newStory = new Story(body)
    try {
        const story = await newStory.save()
        res.status(201).json(story);
    } catch (error) {
        next(error)
    }
}

export const updateStory = async ( req, res, next ) => {
    const { params: { id }, body } = req
    try {
        const story = await Story.findByIdAndUpdate(id, body)
        res.status(200).json(story)
    } catch (error) {
        next(error)
    }
}

export const deleteStory = async ( req, res, next ) => {
    const { params: { id }, body } = req
    try {
        const story = await Story.findByIdAndRemove(id)
        res.status(200).json(story)
    } catch (error) {
        next(error)
    }
}