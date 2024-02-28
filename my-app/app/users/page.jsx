"use client"
import { useRouter } from 'next/navigation';

function page() {
  const router = useRouter();
  return (
    <>
      <div>users page</div>
      <button onClick={() => router.push('/')}>HomePage</button>
      <button onClick={() => router.push('/dashboard')}>Dashboard</button>
    </>
  )
}

export default page