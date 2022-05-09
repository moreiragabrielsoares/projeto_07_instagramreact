


function Acoes () {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Acao () {
    return (
        <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}



export default function Posts() {
    
    
    const postsList = [
        {userImage: "assets/img/meowed.svg" , userName:"meowed" , postImage: "assets/img/gato-telefone.svg" , likeImage: "assets/img/respondeai.svg" , likeUser: "respondeai" , likeNumber: "101.523"},
        {userImage: "assets/img/barked.svg" , userName:"barked" , postImage: "assets/img/dog.svg" , likeImage: "assets/img/adorable_animals.svg" , likeUser: "adorable_animals" , likeNumber: "99.159"}
    ];
    
    
    return (
        <div class="posts">
            
            {postsList.map(post => 
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.userImage} />
                            {post.userName}
                        </div>
                        <Acao />
                    </div>

                    <div class="conteudo">
                        <img src={post.postImage} />
                    </div>

                    <div class="fundo">
                        <Acoes />

                        <div class="curtidas">
                            <img src={post.likeImage} />
                            <div class="texto">
                                Curtido por <strong>{post.likeUser}</strong> e <strong>outras {post.likeNumber} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>    
            )}
            
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" />
                        meowed
                    </div>
                    <Acao />
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" />
                </div>

                <div class="fundo">
                    <Acoes />

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/barked.svg" />
                        barked
                    </div>
                    <Acao />
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" />
                </div>

                <div class="fundo">
                    <Acoes />

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}