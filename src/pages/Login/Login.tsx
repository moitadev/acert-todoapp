import { Wrapper } from "@/components"
import { LoginForm } from "./LoginForm"

export const Login = () => {
    return(
        <div className="flex items-center justify-center h-screen">
            <Wrapper className="flex py-20">
                <h1 className="text-2xl font-bold text-center">Bem-vindo!</h1>
                <LoginForm />
            </Wrapper>
        </div>
    )
}