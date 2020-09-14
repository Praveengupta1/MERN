import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../Action/itemAction";

function ItemModal() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    const newItem = {
      name: name,
    };
    dispatch(addItem(newItem));
    handleToggle();
    setname("");
  };
  return (
    <div>
      <Button color="dark" style={{ margin: "2rem" }} onClick={handleToggle}>
        Add Item
      </Button>
      <Modal isOpen={toggle} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Add To Shooping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                value={name}
                placeholder="Add shopping item"
                onChange={(e) => setname(e.target.value)}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Button
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;
