const LoginForm = () => {
    return (
        <form className="max-w-xl flex flex-col gap-4 text-white">
            <p className="text-2xl">Entrar</p>
            <div>
                <label htmlFor="email">Nome de usuário ou e-mail</label>
                <input type="email" id="email" name="email" placeholder="e-mail@email.com"
                    className="bg-[#130234] border border-[#6528D3] text-xs py-4 px-3 w-full rounded-sm" />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha"
                    className="bg-[#130234] border border-[#6528D3] text-xs py-4 px-3 w-full rounded-sm" />
            </div>


            <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="hidden peer"/>
                <span className="w-4 h-4 border-2 border-[#6528D3] peer-checked:bg-[#6528d3] rounded-sm"></span>
                Manter cconectado
            </label>

            <a href="#"
                className="text-[#6528D3]">Recupere sua senha</a>

            <button type="submit"
                className="bg-[#6528D3] rounded-sm py-4">Entrar</button>
        </form>
    );
};

export default LoginForm;