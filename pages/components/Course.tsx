import React, { useRef } from "react";
import { Course } from "@/pages/common/types";
import { Box, Chip, Rating, Typography } from "@mui/material";
import { getCourseImageLink } from "@/utils/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const Player = dynamic(() => import("react-hls-player"), { ssr: false });

interface CourseProps {
  course: Course;
}

export const CourseItem = ({ course }: CourseProps) => {
  const { skills, courseVideoPreview } = course.meta;
  const playerRef = useRef();
  return (
    <Link href={`courses/${course.id}`} style={{ textDecoration: "none" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="2px solid #DCDCDC"
        borderRadius="8px"
        padding="15px"
        boxSizing="border-box"
      >
        <Typography component="h2">{course.title}</Typography>
        <Box maxWidth="400px">
          <img
            src={getCourseImageLink(course.previewImageLink)}
            alt={course.title}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Rating name="read-only" value={course.rating} readOnly />
        <Box display="flex" flexWrap="wrap" gap="10px" justifyContent="center">
          {skills && skills.map((skill) => <Chip label={skill} key={skill} />)}
        </Box>
      </Box>
    </Link>
  );
};
