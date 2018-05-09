import express from 'express'
import { User } from '../models'


export const listUsers = async ( req, res, next ) => {
    try {
        const userList = await User.find()
        res.status(200).json(userList)
    } catch (error) {
        next(error)
    }        
} 

export const getUser = async ( req, res, next ) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        res.status(200).json(userList)
    } catch (error) {
        next(error)
    }
}

export const addUser = async ( req, res, next ) => {
    const { body } = req
    const newUser = new User(body)
    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}


export const updateUser = async ( req, res, next ) => {
    const { params: { id }, body } = req
    try {
        const user = await User.findByIdAndUpdate(id, body)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async ( req, res, next ) => {
    const { params: { id }, body } = req
    try {
        const user = await User.findByIdAndRemove(id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}