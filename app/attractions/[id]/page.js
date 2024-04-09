"use client"
import React from 'react'
import { getData } from './data'

export default async function page({ params }) {
  const id = params.id
  const data = await getData(id)
  console.log(data.length)
  return (
    <div>
      { data.length > 0 &&
        <div>
          <h1>{data[0].name}</h1>
          <br />
          <img src={data[0].coverimage} />
          <br />
          <p>{data[0].detail}</p>
        </div>
      }
    </div>
  )
}
