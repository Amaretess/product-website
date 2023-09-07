import { styled } from "styled-components";

const Header = () => {
    return <Container>
        <List>
            <li>logo</li>
            <Search>
                <SearchInput type="text" placeholder="Search Hotels"/>
                <i>Icon search</i>
            </Search>
            <ListItem>
                <Icon>Icon bookmark</Icon>
                <Icon>Icon chats</Icon> 
                <Icon>Icon profile</Icon>
            </ListItem>
        </List>
    
    </Container>;
}

export default Header;

const Container = styled.div`
    background: white;

`

const List = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

`
const Search = styled.div`
    
    display: flex;
    align-items: center;
    background-color: none;
`

const SearchInput = styled.input`
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: #f4f2f2;
    border: none;
    padding: .7rem 2rem;
    border-radius: 100px;
    width: 40vw;
    transition: all .2s;
    margin-right: -6rem;
`

const ListItem = styled.li `
    display: flex;
    list-style: none;
    padding: 1rem;

`
const Icon = styled.i`
    margin: 10px;
`