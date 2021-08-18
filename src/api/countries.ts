import { Request, Response } from 'express'
import data from '../data/countries'

export const countries = (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 0
  const offset = Number(req.query.offset) || 0

  const _countries = limit ? data.slice(offset, offset + limit) : data.slice(offset)
  res.json({
    total: data.length,
    limit,
    offset,
    data: _countries
  })
}
