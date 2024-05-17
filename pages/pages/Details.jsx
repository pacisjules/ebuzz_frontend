import React, {useState} from 'react'
import { useRouter } from 'next/router'
function Details() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>Detailgkj {id}</div>
  )
}

export default Details