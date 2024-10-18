import { signInWithGoogle, signOut } from '../utilities/firebase.js';


const buttonSyle = "bg-purple-500 p-2 self-center text-white border-2 rounded-md border-purple-600 hover:border-puruple-700"

const SignInButton = () =>  (
    <button className={buttonSyle} onClick={() => signInWithGoogle()}> Sign In </button>
);

const SignOutButton = () => (
    <button className={buttonSyle} onClick={() => signOut()}> Sign Out </button>
);


function AuthButton(props) {

    return props.user ? <SignOutButton /> : <SignInButton />;

}

export default AuthButton; 