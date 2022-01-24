import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";

export default function Home() {
  //init
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [notesError, setNotesError] = useState(false);
  const [category, setCategory] = useState("");

  //handle
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setNotesError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (title == "") {
      setNotesError(true);
    }

    if (title && notes) {
      fetch("http://localhost:3000/notes", {
        method: "POST",
        body: JSON.stringify({ title, content, category }),
      });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
      <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
          <Container>
            <div>
              <Typography className={styles.title} color="textSeconadry" component="h2" gutterBottom>
                Create New
              </Typography>

              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={(e) => setTitle(e.target.value)} className={styles.field} label="Title" variant="outlined" color="secondary" fullWidth required error={titleError} />
                <TextField onChange={(e) => setNotes(e.target.value)} className={styles.field} label="Notes" variant="outlined" color="secondary" multiline rows={7} fullWidth required error={notesError} />

                <FormControl className={styles.field}>
                  <FormLabel>Category</FormLabel>
                  <RadioGroup value={category} onBhange={(e) => setCategory(e.target)}>
                    <FormControlLabel value="todo" control={<Radio />} label="Todo" />
                    <FormControlLabel value="diary" control={<Radio />} label="Diary" />
                    <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>

                <Button className={styles.btn} type="submit" color="secondary" variant="contained">
                  Submit
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
