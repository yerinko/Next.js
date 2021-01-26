import { useRouter } from 'next/router'
import MyLayout from '../components/MyLayout'

const Page = () => {
    // useRouter 통해 router router 객체에 접근하여 페이지에 값을 넣을 수 있다.
    // React Hook 과 함수형 컴포넌트에서도 사용 할 수 있다.
    const router = useRouter()

    return (
        <MyLayout>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </MyLayout>
    )
}

export default Page