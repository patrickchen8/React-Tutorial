import AuthButton from './AuthButton.jsx';

function Banner(props) {
    return (
        <div className="flex justify-between mx-12 mb-2">
            <h1 className="text-3xl font-bold text-center mt-4 mb-4">{props.title}</h1>
            <AuthButton user={props.user}/>
        </div>
    )

}

export default Banner; 