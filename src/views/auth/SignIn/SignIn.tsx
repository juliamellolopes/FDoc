import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div className="mb-8">
                <h3 className="mb-1">Bem-Vindo!</h3>
                <p>Por favor insira sua credenciais para o login!</p>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
