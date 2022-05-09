

export default function Stories() {
    
    const storiesList = [
        {userImage: "assets/img/9gag.svg" , userName: "9gag"}, 
        {userImage: "assets/img/meowed.svg" , userName: "9meowed"},
        {userImage: "assets/img/barked.svg" , userName: "barked"},
        {userImage: "assets/img/nathanwpylestrangeplanet.svg" , userName: "nathanwpylestrangeplanet"},
        {userImage: "assets/img/wawawicomics.svg" , userName: "wawawicomics"},
        {userImage: "assets/img/respondeai.svg" , userName: "respondeai"},
        {userImage: "assets/img/filomoderna.svg" , userName: "filomoderna"},
        {userImage: "assets/img/memeriagourmet.svg" , userName: "memeriagourmet"}
    ];
    
    return (
        <div class="stories">
            
            {storiesList.map(userList =>
                <div class="story"> 
                    <div class="imagem">
                        <img src={userList.userImage} />
                    </div>
                    <div class="usuario">
                        {userList.userName}
                    </div>
                </div>
                )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

}