import Image from "next/image";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material/IconButton";
import { DeleteOutlined } from "@mui/material/Icon";
import styles from "../../styles/Home.module.css";
import { Typography } from "@mui/material";

export default function NoteCard({ note, handleDelete }) {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <Card>
          <CardHeader
            action={
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlined />
              </IconButton>
            }
            title={note.title}
            subheader={note.category}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {note.content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
