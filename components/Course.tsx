import React, { useState } from "react";
import { CourseItem } from "../common/types";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Video } from "./Video";

interface CourseProps {
  course: CourseItem;
}

export const Course = ({ course }: CourseProps) => {
  const { lessons } = course;

  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const currentVideoSrc = lessons[selectedLessonIndex].link;

  const handleLessonItemClick = (index: number) => {
    setSelectedLessonIndex(index);
  };

  return (
    <Box>
      <Typography variant="h4">{course.title}</Typography>
      <Typography variant="h5">Lessons number: {lessons.length}</Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
        <Typography variant="h5" gridColumn="1/3">
          {lessons[selectedLessonIndex].title}
        </Typography>
        <Box flexBasis="50%">
          <Video src={currentVideoSrc} />
          <Typography component="p">
            You can adjust video speed by using shortcuts
            Alt+ArrowUp/Alt+ArrowDown
          </Typography>
        </Box>
        {lessons.length > 0 && (
          <List>
            {lessons.map((lesson, index) => (
              <ListItemButton
                key={lesson.id}
                selected={selectedLessonIndex === index}
                onClick={() => handleLessonItemClick(index)}
                disabled={lesson.status === "locked"}
              >
                <ListItemText primary={lesson.title} />
                {lesson.status === "locked" && <LockIcon />}
              </ListItemButton>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};
