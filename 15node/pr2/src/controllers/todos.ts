// import { Request, Response, NextFunction } from 'express'
import { RequestHandler } from 'express'
import { Todo } from '../models/todos'

const TODOS: Todo[] = []

// export const createTodo = (req: Request, res: Response, next: NextFunction) => { }
export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text
    const newTodo: Todo = new Todo(Math.random().toString(), text)
    TODOS.push(newTodo)
    res.status(201).json({ message: 'Todo item was created', createdTodo: newTodo })
}