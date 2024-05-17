import React, {useState} from 'react'
import { useRouter } from 'next/router'
function Post() {
  const router = useRouter();
  const { myid } = router.query;

  return (
    <div>Post {myid}</div>
  )
}

export default Post