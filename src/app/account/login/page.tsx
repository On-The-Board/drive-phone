import { LoginForm } from "./form";
import { Suspense } from 'react'


export default function LoginPage() {
    return (
        <Suspense>
            <main className="min-h-screen px-5 lg:px-36 text-black">
                <LoginForm />
            </main>
        </Suspense>
    );
}