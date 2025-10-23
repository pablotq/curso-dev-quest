import "./dasboard.css"

type DashboardProps = {
    username?: string | null
}

const DashBoard = ({ username }: DashboardProps) => {
    return (
        <div>
            {username ? (
                <h2>Bem-vindo, {username}!</h2>
            ) : (
                <h2 className="not-logged">Bem-indo ao Dashboard! Por favor faça o login.</h2>
            )}
        </div>
    );
}

export default DashBoard;