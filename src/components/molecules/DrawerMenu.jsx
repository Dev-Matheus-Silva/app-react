import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to="/users/posts/new">Criar post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
