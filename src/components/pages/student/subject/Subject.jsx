"use client";

import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { subjectsData } from "./SubData";


const TableComponent = ({ title, data }) => {
  if (!data.length) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-1/3">Subject Name</TableHead>
            <TableHead className="text-center w-1/3">Code</TableHead>
            <TableHead className="text-center w-1/3">Credit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((subject) => (
            <TableRow key={subject.code}>
              <TableCell className="text-center">{subject.name}</TableCell>
              <TableCell className="text-center">{subject.code}</TableCell>
              <TableCell className="text-center">{subject.credit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const ProjectTable = ({ project }) => {
  if (!project.length) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Project Work</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-1/2">Project Code</TableHead>
            <TableHead className="text-center w-1/2">Credit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {project.map((proj) => (
            <TableRow key={proj.code}>
              <TableCell className="text-center">{proj.code}</TableCell>
              <TableCell className="text-center">{proj.credit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


export function SubjectTable() {
  const [semester, setSemester] = useState(1);
  const { core, lab, project, optional } = subjectsData[semester];

  return (
    <div className="m-4 max-w-screen">
      <h1 className="text-2xl font-bold mb-4">Semester {semester} Subjects</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
        {[...Array(8)].map((_, i) => (
          <Button key={i + 1} variant={semester === i + 1 ? "default" : "outline"} onClick={() => setSemester(i + 1)}>
            Semester {i + 1}
          </Button>
        ))}
      </div>
      <TableComponent title="Core Subjects" data={core} />
      <TableComponent title="Lab Subjects" data={lab} />
      <ProjectTable project= {project} />
      <TableComponent title="Optional Subjects" data={optional} />
    </div>
  );
}