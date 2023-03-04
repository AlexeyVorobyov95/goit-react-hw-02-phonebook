import { Span, Item, Button } from "./ContactsList.styled"

export const ContactsItem = ({ name, number, id, deleteButton}) => {
    return (
        <Item id={id}>
          <Span>{name}</Span>
          {number}
          <Button onClick={() => deleteButton(id)} type="button">
            Delete contact
          </Button>
        </Item>
    )
}