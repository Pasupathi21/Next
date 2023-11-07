'use client'
import { useRouter } from 'next/navigation'

export default function TestOneListPage() {
    const router = useRouter()
    
    return <button onClick={() => router.push('/test-one/add-edit-view')}>Click</button>
}