import {
    PanelHeader,
    Title
} from '@vkontakte/vkui'

function Header () {
    
    return (
        <>
            <PanelHeader style={{display: "flex", justifyContent: "center"}} fixed>
                <Title>Новости хакинга от HackerNews</Title>
            </PanelHeader>
        </>
    )
}

export default Header