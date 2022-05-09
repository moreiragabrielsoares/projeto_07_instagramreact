

function SidebarUser(props) {
    
    return (
        <div class="usuario">
            <img src={props.imageUser} />
            <div class="texto">
                <strong>{props.nameUser}</strong>
                {props.firstNameUser}
            </div>
        </div>
    )
}

export default function Sidebar() {
    
    const suggestionList = [
        {userImage: "assets/img/bad.vibes.memes.svg" , userName: "bad.vibes.memes" , reason: "Segue você"}, 
        {userImage: "assets/img/chibirdart.svg" , userName: "chibirdart" , reason: "Segue você"},
        {userImage: "assets/img/razoesparaacreditar.svg" , userName: "razoesparaacreditar" , reason: "Novo no Instagram"},
        {userImage: "assets/img/adorable_animals.svg" , userName: "adorable_animals" , reason: "Segue você"},
        {userImage: "assets/img/smallcutecats.svg" , userName: "smallcutecats" , reason: "Segue você"},
    ];
    
    return (
        <div class="sidebar">
            <SidebarUser 
                imageUser="assets/img/catanacomics.svg"
                nameUser="catanacomics"
                firstNameUser="Catana"
            />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                
                {suggestionList.map(userList => 
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={userList.userImage} />
                            <div class="texto">
                                <div class="nome">{userList.userName}</div>
                                <div class="razao">{userList.reason}</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                )}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}