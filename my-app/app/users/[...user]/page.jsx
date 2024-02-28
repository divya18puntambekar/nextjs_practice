"use client"
import { 
  useRouter,
  useParams,
  useSearchParams,
  usePathname
} from 'next/navigation';

function userDetails({params}) {
    console.log("=== param s==",params)
    const router = useRouter();
    const { id } = useParams();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const age = useSearchParams()
  return (
    <>
      <div>userDetails id</div>
      <div>id: { id }</div>
      <div>name: {name}</div>
      <div>age: {age.get('age')}</div>
      <div>pathName: {pathName}</div>
      <button onClick={() => router.push('/')}>HomePage</button>
      <button onClick={() => router.push('/dashboard')}>Dashboard</button>
    </>
  )
}

export default userDetails