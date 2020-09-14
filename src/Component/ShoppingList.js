import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItems } from "../Action/itemAction";
import { useSelector, useDispatch } from "react-redux";
function ShoppingList() {
  const items = useSelector((state) => state.item.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, items]);
  return (
    <Container>
      <ListGroup>
        <TransitionGroup>
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={5} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => dispatch(deleteItems(_id))}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

export default ShoppingList;
