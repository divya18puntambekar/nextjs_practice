"use client"
import { useRouter } from 'next/navigation';

function userDetails({params}) {
    console.log("=== param s==",params)
    const router = useRouter();
  return (
    <>
      <div>userDetails id</div>
      <button onClick={() => router.push('/')}>HomePage</button>
      <button onClick={() => router.push('/dashboard')}>Dashboard</button>
    </>
  )
}

export default userDetails