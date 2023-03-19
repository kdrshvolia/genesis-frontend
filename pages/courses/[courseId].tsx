import React from "react";
import { CourseItem } from "../../common/types";
import { getCourseById } from "../../api/requests";
import { Course } from "../../components/Course";
import { GetServerSideProps } from "next";

interface PageProps {
  course: CourseItem;
}

const Page = ({ course }: PageProps) => {
  return Object.keys(course).length !== 0 ? <Course course={course} /> : null;
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const courseId = query.courseId as string;
  const authToken = req.cookies?.authToken;
  let course: CourseItem;
  if (authToken) {
    course = await getCourseById(authToken, courseId);
  }

  return {
    props: {
      course,
    },
  };
};
export default Page;
