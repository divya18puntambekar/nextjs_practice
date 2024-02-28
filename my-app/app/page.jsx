import React from 'react'
import Admin from './admin' 
import Link from 'next/link';
const page = () => {
  return (
    <>
        <div>page</div>
        <div><Admin /></div>
        <Link href="/users">User</Link><br />
        <Link href="/dashboard">Dashboard</Link><br />
        <Link href="/dashboard/page">Dashboard Homepage</Link><br />
        <Link href="/dashboard/1223">Dashboard Id page</Link>
        {/* 1223 is random dashboard id */}
    </>
  )
}

export default page